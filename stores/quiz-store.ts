import { create } from "zustand";
import { persist } from "zustand/middleware";
import { section2Zones, section3Zones } from "@/lib/quiz-data";
import { section1InteractiveZones } from "@/lib/section1-interactive-data";

interface QuizState {
  droppedItems: Record<string, string>;
  wrongAttempts: Record<string, number>;
  completedSections: string[];
  showHint: boolean;

  recordDrop: (zoneId: string, itemId: string, correct: boolean) => void;
  isCorrect: (zoneId: string) => boolean;
  isDropped: (zoneId: string) => boolean;
  getDroppedItem: (zoneId: string) => string | null;
  getWrongAttempts: (zoneId: string) => number;
  getHintEligible: (zoneId: string) => boolean;
  completeSection: (sectionId: string) => void;
  setShowHint: (show: boolean) => void;
  reset: () => void;
}

const initialState = {
  droppedItems: {} as Record<string, string>,
  wrongAttempts: {} as Record<string, number>,
  completedSections: [] as string[],
  showHint: false,
};

const PERSIST_VERSION = 3;
const VALID_ZONE_IDS = new Set<string>([
  ...section1InteractiveZones.map((zone) => zone.id),
  ...section2Zones.map((zone) => zone.id),
  ...section3Zones.map((zone) => zone.id),
]);

function sanitizeDroppedItems(
  droppedItems: Record<string, string> | undefined,
): Record<string, string> {
  if (!droppedItems) return {};
  return Object.fromEntries(
    Object.entries(droppedItems).filter(([zoneId]) => VALID_ZONE_IDS.has(zoneId)),
  );
}

function sanitizeWrongAttempts(
  wrongAttempts: Record<string, number> | undefined,
): Record<string, number> {
  if (!wrongAttempts) return {};
  return Object.fromEntries(
    Object.entries(wrongAttempts).filter(([zoneId]) => VALID_ZONE_IDS.has(zoneId)),
  );
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      ...initialState,

      recordDrop: (zoneId, itemId, correct) =>
        set((state) => {
          if (correct) {
            return {
              droppedItems: { ...state.droppedItems, [zoneId]: itemId },
            };
          }

          return {
            wrongAttempts: {
              ...state.wrongAttempts,
              [zoneId]: (state.wrongAttempts[zoneId] || 0) + 1,
            },
          };
        }),

      isCorrect: (zoneId) => zoneId in get().droppedItems,
      isDropped: (zoneId) => zoneId in get().droppedItems,
      getDroppedItem: (zoneId) => get().droppedItems[zoneId] ?? null,
      getWrongAttempts: (zoneId) => get().wrongAttempts[zoneId] ?? 0,
      getHintEligible: (zoneId) => (get().wrongAttempts[zoneId] ?? 0) >= 2,

      completeSection: (sectionId) =>
        set((state) => ({
          completedSections: state.completedSections.includes(sectionId)
            ? state.completedSections
            : [...state.completedSections, sectionId],
        })),

      setShowHint: (show) => set({ showHint: show }),
      reset: () => set(initialState),
    }),
    {
      name: "quiz-progress-v2",
      version: PERSIST_VERSION,
      migrate: (persistedState) => {
        const state = (persistedState ?? {}) as Partial<QuizState>;
        return {
          ...initialState,
          ...state,
          droppedItems: sanitizeDroppedItems(state.droppedItems),
          wrongAttempts: sanitizeWrongAttempts(state.wrongAttempts),
          completedSections: Array.isArray(state.completedSections)
            ? state.completedSections
            : [],
          showHint: Boolean(state.showHint),
        };
      },
    },
  ),
);
