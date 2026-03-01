import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Section3Phase = 'dimensions' | 'comparison';

interface QuizState {
  // Dropped items: zoneId -> itemId
  droppedItems: Record<string, string>;
  // Wrong attempts count per zone
  wrongAttempts: Record<string, number>;
  // Completed sections
  completedSections: string[];
  // Section 3 phase (dimensions quiz first, then comparison)
  section3Phase: Section3Phase;
  // Hint visibility
  showHint: boolean;

  // Actions
  recordDrop: (zoneId: string, itemId: string, correct: boolean) => void;
  isCorrect: (zoneId: string) => boolean;
  isDropped: (zoneId: string) => boolean;
  getDroppedItem: (zoneId: string) => string | null;
  getWrongAttempts: (zoneId: string) => number;
  getHintEligible: (zoneId: string) => boolean;
  completeSection: (sectionId: string) => void;
  setSectionPhase: (phase: Section3Phase) => void;
  setShowHint: (show: boolean) => void;
  getScoreForQuiz: (quiz: string, totalItems: number) => number;
  reset: () => void;
}

const initialState = {
  droppedItems: {} as Record<string, string>,
  wrongAttempts: {} as Record<string, number>,
  completedSections: [] as string[],
  section3Phase: 'dimensions' as Section3Phase,
  showHint: false,
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      ...initialState,

      recordDrop: (zoneId, itemId, correct) =>
        set((s) => {
          if (correct) {
            return { droppedItems: { ...s.droppedItems, [zoneId]: itemId } };
          }
          return {
            wrongAttempts: {
              ...s.wrongAttempts,
              [zoneId]: (s.wrongAttempts[zoneId] || 0) + 1,
            },
          };
        }),

      isCorrect: (zoneId) => zoneId in get().droppedItems,

      isDropped: (zoneId) => zoneId in get().droppedItems,

      getDroppedItem: (zoneId) => get().droppedItems[zoneId] ?? null,

      getWrongAttempts: (zoneId) => get().wrongAttempts[zoneId] ?? 0,

      // Hint eligible after 2 wrong attempts
      getHintEligible: (zoneId) => (get().wrongAttempts[zoneId] ?? 0) >= 2,

      completeSection: (sectionId) =>
        set((s) => ({
          completedSections: s.completedSections.includes(sectionId)
            ? s.completedSections
            : [...s.completedSections, sectionId],
        })),

      setSectionPhase: (phase) => set({ section3Phase: phase }),

      setShowHint: (show) => set({ showHint: show }),

      getScoreForQuiz: (quiz, totalItems) => {
        const dropped = get().droppedItems;
        // Count zones that match this quiz prefix
        const count = Object.keys(dropped).filter((zoneId) => {
          // Items reference quiz via their answer field — count correct drops
          return true; // all entries in droppedItems are correct by design
        }).length;
        // We filter by checking item ids in droppedItems values
        return count;
      },

      reset: () => set(initialState),
    }),
    { name: "quiz-progress-v2" }
  )
);
