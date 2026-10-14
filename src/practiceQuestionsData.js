/* =========================================================================
   PRACTICE QUESTIONS DATA (100 Distinct Questions for 10 Worlds)
   10 Worlds × 10 Questions each with Hints, Speech Text, and Visuals.
   Grade 8 Inverse Proportion (xy = k, y = k/x, word problems, tables, graphs)
   ========================================================================= */

export const PRACTICE_QUESTIONS = [
  // -------------------------------------------------------------------------
  // WORLD 0: Pizza Party Plaza (Q1–10) · Difficulty: 1
  // -------------------------------------------------------------------------
  [
    {
      id: "w0_q1", worldIndex: 0, qNum: 1,
      rule: "SHARING RULE",
      prompt: "4 friends share a 24-slice pizza equally, getting 6 slices each. If 8 friends share the same pizza, how many slices does each friend get?",
      audioText: "4 friends share a 24-slice pizza equally, getting 6 slices each. If 8 friends share the same pizza, how many slices does each friend get?",
      options: ["3 slices", "6 slices", "12 slices", "2 slices"],
      correctIndex: 0,
      hint: "Find the total slices: 4 times 6 equals 24. Then divide 24 slices equally among 8 friends.",
      hintAudioText: "Find the total slices: 4 times 6 equals 24. Then divide 24 slices equally among 8 friends.",
      explanation: "Total = 4 × 6 = 24 slices. 24 ÷ 8 = 3 slices each.",
      visual: { kind: 'icons', icon: '🍕', count: 8, label: '24 slices ÷ 8 friends' },
      audioKey: "q_w0_1", hintAudioKey: "hint_w0_1"
    },
    {
      id: "w0_q2", worldIndex: 0, qNum: 2,
      rule: "SHARING RULE",
      prompt: "A box of 36 cookies is divided among 6 children so each receives 6 cookies. How many cookies does each child get if only 3 children share them?",
      audioText: "A box of 36 cookies is divided among 6 children so each receives 6 cookies. How many cookies does each child get if only 3 children share them?",
      options: ["12 cookies", "3 cookies", "9 cookies", "18 cookies"],
      correctIndex: 0,
      hint: "Fewer children means more cookies each! Divide the total of 36 cookies by 3 children.",
      hintAudioText: "Fewer children means more cookies each! Divide the total of 36 cookies by 3 children.",
      explanation: "Total = 6 × 6 = 36 cookies. 36 ÷ 3 = 12 cookies each.",
      visual: { kind: 'icons', icon: '🍪', count: 3, label: '36 cookies ÷ 3 children' },
      audioKey: "q_w0_2", hintAudioKey: "hint_w0_2"
    },
    {
      id: "w0_q3", worldIndex: 0, qNum: 3,
      rule: "SHARING RULE",
      prompt: "12 students share a pack of 60 stickers equally, getting 5 stickers each. If 15 students share the pack, how many stickers does each get?",
      audioText: "12 students share a pack of 60 stickers equally, getting 5 stickers each. If 15 students share the pack, how many stickers does each get?",
      options: ["4 stickers", "6 stickers", "8 stickers", "3 stickers"],
      correctIndex: 0,
      hint: "Total stickers is 12 times 5, which is 60. Now divide 60 by 15 students.",
      hintAudioText: "Total stickers is 12 times 5, which is 60. Now divide 60 by 15 students.",
      explanation: "Total = 12 × 5 = 60 stickers. 60 ÷ 15 = 4 stickers each.",
      visual: { kind: 'icons', icon: '⭐', count: 15, label: '60 stickers ÷ 15 students' },
      audioKey: "q_w0_3", hintAudioKey: "hint_w0_3"
    },
    {
      id: "w0_q4", worldIndex: 0, qNum: 4,
      rule: "PRODUCT RULE",
      prompt: "x and y are inversely proportional. When x = 3, y = 8. What is the constant product k?",
      audioText: "x and y are inversely proportional. When x equals 3, y equals 8. What is the constant product k?",
      options: ["k = 24", "k = 11", "k = 5", "k = 2.67"],
      correctIndex: 0,
      hint: "In inverse proportion, the constant k is the product of x and y. Multiply 3 by 8.",
      hintAudioText: "In inverse proportion, the constant k is the product of x and y. Multiply 3 by 8.",
      explanation: "k = x × y = 3 × 8 = 24.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[3, 8]] },
      audioKey: "q_w0_4", hintAudioKey: "hint_w0_4"
    },
    {
      id: "w0_q5", worldIndex: 0, qNum: 5,
      rule: "SHARING RULE",
      prompt: "A bag of 48 marbles is shared equally among 4 friends, giving each 12 marbles. How many marbles does each get if 6 friends share them?",
      audioText: "A bag of 48 marbles is shared equally among 4 friends, giving each 12 marbles. How many marbles does each get if 6 friends share them?",
      options: ["8 marbles", "6 marbles", "10 marbles", "16 marbles"],
      correctIndex: 0,
      hint: "Total marbles is 48. Divide 48 marbles equally among 6 friends.",
      hintAudioText: "Total marbles is 48. Divide 48 marbles equally among 6 friends.",
      explanation: "Total = 4 × 12 = 48 marbles. 48 ÷ 6 = 8 marbles each.",
      visual: { kind: 'icons', icon: '🔮', count: 6, label: '48 marbles ÷ 6 friends' },
      audioKey: "q_w0_5", hintAudioKey: "hint_w0_5"
    },
    {
      id: "w0_q6", worldIndex: 0, qNum: 6,
      rule: "FORMULA RULE",
      prompt: "Which equation shows that y is inversely proportional to x?",
      audioText: "Which equation shows that y is inversely proportional to x?",
      options: ["y = 24/x", "y = 24x", "y = x + 24", "y = 24 − x"],
      correctIndex: 0,
      hint: "Inverse proportion means y equals a constant divided by x, or x times y equals a constant.",
      hintAudioText: "Inverse proportion means y equals a constant divided by x, or x times y equals a constant.",
      explanation: "Inverse proportion has the form y = k/x or xy = k.",
      visual: { kind: 'eq', text: 'y = k ÷ x' },
      audioKey: "q_w0_6", hintAudioKey: "hint_w0_6"
    },
    {
      id: "w0_q7", worldIndex: 0, qNum: 7,
      rule: "SHARING RULE",
      prompt: "When 2 people share a birthday cake, each person gets 180 grams. If 6 people share the same cake equally, how many grams does each get?",
      audioText: "When 2 people share a birthday cake, each person gets 180 grams. If 6 people share the same cake equally, how many grams does each get?",
      options: ["60 grams", "90 grams", "120 grams", "30 grams"],
      correctIndex: 0,
      hint: "Find total cake weight: 2 times 180 equals 360 grams. Then divide 360 by 6.",
      hintAudioText: "Find total cake weight: 2 times 180 equals 360 grams. Then divide 360 by 6.",
      explanation: "Total = 2 × 180 = 360g. 360 ÷ 6 = 60g each.",
      visual: { kind: 'icons', icon: '🎂', count: 6, label: '360g ÷ 6 people' },
      audioKey: "q_w0_7", hintAudioKey: "hint_w0_7"
    },
    {
      id: "w0_q8", worldIndex: 0, qNum: 8,
      rule: "PRODUCT RULE",
      prompt: "Two variables satisfy xy = 40. When x = 5, what is the value of y?",
      audioText: "Two variables satisfy x times y equals 40. When x equals 5, what is the value of y?",
      options: ["y = 8", "y = 35", "y = 200", "y = 4"],
      correctIndex: 0,
      hint: "Divide the constant 40 by x, which is 5, to find y.",
      hintAudioText: "Divide the constant 40 by x, which is 5, to find y.",
      explanation: "y = 40 ÷ 5 = 8.",
      visual: { kind: 'eq', text: '5 × y = 40' },
      audioKey: "q_w0_8", hintAudioKey: "hint_w0_8"
    },
    {
      id: "w0_q9", worldIndex: 0, qNum: 9,
      rule: "SHARING RULE",
      prompt: "5 friends split a platter of 30 cupcakes, getting 6 cupcakes each. If 10 friends share the platter, how many cupcakes does each get?",
      audioText: "5 friends split a platter of 30 cupcakes, getting 6 cupcakes each. If 10 friends share the platter, how many cupcakes does each get?",
      options: ["3 cupcakes", "6 cupcakes", "12 cupcakes", "2 cupcakes"],
      correctIndex: 0,
      hint: "Doubling the friends from 5 to 10 halves each share. 30 divided by 10 is 3.",
      hintAudioText: "Doubling the friends from 5 to 10 halves each share. 30 divided by 10 is 3.",
      explanation: "Total = 5 × 6 = 30. 30 ÷ 10 = 3 cupcakes each.",
      visual: { kind: 'icons', icon: '🧁', count: 10, label: '30 cupcakes ÷ 10 friends' },
      audioKey: "q_w0_9", hintAudioKey: "hint_w0_9"
    },
    {
      id: "w0_q10", worldIndex: 0, qNum: 10,
      rule: "FORMULA RULE",
      prompt: "x and y are inversely proportional with constant product k = 72. What is y when x = 9?",
      audioText: "x and y are inversely proportional with constant product k equals 72. What is y when x equals 9?",
      options: ["y = 8", "y = 7", "y = 9", "y = 6"],
      correctIndex: 0,
      hint: "Use y = k divided by x. Divide 72 by 9.",
      hintAudioText: "Use y equals k divided by x. Divide 72 by 9.",
      explanation: "y = 72 ÷ 9 = 8.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[9, '?']] },
      audioKey: "q_w0_10", hintAudioKey: "hint_w0_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 1: Painter's Workshop (Q11–20) · Difficulty: 1
  // -------------------------------------------------------------------------
  [
    {
      id: "w1_q1", worldIndex: 1, qNum: 11,
      rule: "WORK RULE",
      prompt: "2 painters take 12 days to paint a community hall. How many days would 4 painters take working at the same rate?",
      audioText: "2 painters take 12 days to paint a community hall. How many days would 4 painters take working at the same rate?",
      options: ["6 days", "24 days", "3 days", "8 days"],
      correctIndex: 0,
      hint: "Calculate total painter-days: 2 times 12 is 24. Then divide 24 by 4 painters.",
      hintAudioText: "Calculate total painter-days: 2 times 12 is 24. Then divide 24 by 4 painters.",
      explanation: "Total work = 2 × 12 = 24 painter-days. 24 ÷ 4 = 6 days.",
      visual: { kind: 'table', xLabel: 'Painters', yLabel: 'Days', rows: [[2, 12], [4, '?']] },
      audioKey: "q_w1_1", hintAudioKey: "hint_w1_1"
    },
    {
      id: "w1_q2", worldIndex: 1, qNum: 12,
      rule: "WORK RULE",
      prompt: "3 artists take 8 hours to complete a mural. How many artists are needed to finish the mural in 4 hours?",
      audioText: "3 artists take 8 hours to complete a mural. How many artists are needed to finish the mural in 4 hours?",
      options: ["6 artists", "4 artists", "2 artists", "8 artists"],
      correctIndex: 0,
      hint: "Total work is 3 times 8 equals 24 artist-hours. Divide 24 by 4 hours.",
      hintAudioText: "Total work is 3 times 8 equals 24 artist-hours. Divide 24 by 4 hours.",
      explanation: "Total = 3 × 8 = 24 artist-hours. 24 ÷ 4 = 6 artists.",
      visual: { kind: 'table', xLabel: 'Artists', yLabel: 'Hours', rows: [[3, 8], ['?', 4]] },
      audioKey: "q_w1_2", hintAudioKey: "hint_w1_2"
    },
    {
      id: "w1_q3", worldIndex: 1, qNum: 13,
      rule: "WORK RULE",
      prompt: "6 decorators take 5 days to paint a school gym. How long would 10 decorators take at the same pace?",
      audioText: "6 decorators take 5 days to paint a school gym. How long would 10 decorators take at the same pace?",
      options: ["3 days", "8 days", "2 days", "5 days"],
      correctIndex: 0,
      hint: "Total work is 6 times 5 equals 30 worker-days. Divide 30 by 10 decorators.",
      hintAudioText: "Total work is 6 times 5 equals 30 worker-days. Divide 30 by 10 decorators.",
      explanation: "Total = 6 × 5 = 30 worker-days. 30 ÷ 10 = 3 days.",
      visual: { kind: 'table', xLabel: 'Decorators', yLabel: 'Days', rows: [[6, 5], [10, '?']] },
      audioKey: "q_w1_3", hintAudioKey: "hint_w1_3"
    },
    {
      id: "w1_q4", worldIndex: 1, qNum: 14,
      rule: "WORK RULE",
      prompt: "4 painters can paint a fence in 9 hours. How many hours would 6 painters take?",
      audioText: "4 painters can paint a fence in 9 hours. How many hours would 6 painters take?",
      options: ["6 hours", "13.5 hours", "4 hours", "3 hours"],
      correctIndex: 0,
      hint: "Total work is 4 times 9 equals 36 painter-hours. Divide 36 by 6 painters.",
      hintAudioText: "Total work is 4 times 9 equals 36 painter-hours. Divide 36 by 6 painters.",
      explanation: "Total = 4 × 9 = 36 painter-hours. 36 ÷ 6 = 6 hours.",
      visual: { kind: 'table', xLabel: 'Painters', yLabel: 'Hours', rows: [[4, 9], [6, '?']] },
      audioKey: "q_w1_4", hintAudioKey: "hint_w1_4"
    },
    {
      id: "w1_q5", worldIndex: 1, qNum: 15,
      rule: "PRODUCT RULE",
      prompt: "8 workers take 6 days to repaint an apartment building. What is the total constant of work k in worker-days?",
      audioText: "8 workers take 6 days to repaint an apartment building. What is the total constant of work k in worker-days?",
      options: ["k = 48", "k = 14", "k = 2", "k = 24"],
      correctIndex: 0,
      hint: "Multiply the number of workers by the number of days: 8 times 6.",
      hintAudioText: "Multiply the number of workers by the number of days: 8 times 6.",
      explanation: "k = 8 × 6 = 48 worker-days.",
      visual: { kind: 'eq', text: 'k = 8 workers × 6 days' },
      audioKey: "q_w1_5", hintAudioKey: "hint_w1_5"
    },
    {
      id: "w1_q6", worldIndex: 1, qNum: 16,
      rule: "WORK RULE",
      prompt: "1 master painter takes 36 hours to paint an ornamental ceiling. If 4 equally skilled painters work together, how many hours will it take?",
      audioText: "1 master painter takes 36 hours to paint an ornamental ceiling. If 4 equally skilled painters work together, how many hours will it take?",
      options: ["9 hours", "144 hours", "6 hours", "12 hours"],
      correctIndex: 0,
      hint: "1 times 36 is 36 painter-hours. Divide 36 by 4 painters.",
      hintAudioText: "1 times 36 is 36 painter-hours. Divide 36 by 4 painters.",
      explanation: "36 ÷ 4 = 9 hours.",
      visual: { kind: 'table', xLabel: 'Painters', yLabel: 'Hours', rows: [[1, 36], [4, '?']] },
      audioKey: "q_w1_6", hintAudioKey: "hint_w1_6"
    },
    {
      id: "w1_q7", worldIndex: 1, qNum: 17,
      rule: "WORK RULE",
      prompt: "5 painters finish a house in 12 days. How many painters are needed to finish the house in 10 days?",
      audioText: "5 painters finish a house in 12 days. How many painters are needed to finish the house in 10 days?",
      options: ["6 painters", "4 painters", "8 painters", "10 painters"],
      correctIndex: 0,
      hint: "Total work is 5 times 12 equals 60 painter-days. Divide 60 by 10 days.",
      hintAudioText: "Total work is 5 times 12 equals 60 painter-days. Divide 60 by 10 days.",
      explanation: "Total = 5 × 12 = 60 painter-days. 60 ÷ 10 = 6 painters.",
      visual: { kind: 'table', xLabel: 'Painters', yLabel: 'Days', rows: [[5, 12], ['?', 10]] },
      audioKey: "q_w1_7", hintAudioKey: "hint_w1_7"
    },
    {
      id: "w1_q8", worldIndex: 1, qNum: 18,
      rule: "WORK RULE",
      prompt: "3 workers take 16 days to paint a bridge. If the crew is reduced to 2 workers, how many days will the job take?",
      audioText: "3 workers take 16 days to paint a bridge. If the crew is reduced to 2 workers, how many days will the job take?",
      options: ["24 days", "11 days", "32 days", "16 days"],
      correctIndex: 0,
      hint: "Fewer workers means more days! 3 times 16 is 48 worker-days. Divide 48 by 2.",
      hintAudioText: "Fewer workers means more days! 3 times 16 is 48 worker-days. Divide 48 by 2.",
      explanation: "Total = 3 × 16 = 48 worker-days. 48 ÷ 2 = 24 days.",
      visual: { kind: 'table', xLabel: 'Workers', yLabel: 'Days', rows: [[3, 16], [2, '?']] },
      audioKey: "q_w1_8", hintAudioKey: "hint_w1_8"
    },
    {
      id: "w1_q9", worldIndex: 1, qNum: 19,
      rule: "WORK RULE",
      prompt: "12 painters can paint an exhibition centre in 4 days. How many days would 8 painters take?",
      audioText: "12 painters can paint an exhibition centre in 4 days. How many days would 8 painters take?",
      options: ["6 days", "2.67 days", "8 days", "4 days"],
      correctIndex: 0,
      hint: "Total work equals 12 times 4, which is 48 painter-days. Divide 48 by 8.",
      hintAudioText: "Total work equals 12 times 4, which is 48 painter-days. Divide 48 by 8.",
      explanation: "Total = 12 × 4 = 48 painter-days. 48 ÷ 8 = 6 days.",
      visual: { kind: 'table', xLabel: 'Painters', yLabel: 'Days', rows: [[12, 4], [8, '?']] },
      audioKey: "q_w1_9", hintAudioKey: "hint_w1_9"
    },
    {
      id: "w1_q10", worldIndex: 1, qNum: 20,
      rule: "PRODUCT RULE",
      prompt: "A contractor knows that workers w and days d satisfy w × d = 72. If she assigns 9 workers, how many days will the painting take?",
      audioText: "A contractor knows that workers w and days d satisfy w times d equals 72. If she assigns 9 workers, how many days will the painting take?",
      options: ["8 days", "648 days", "6 days", "9 days"],
      correctIndex: 0,
      hint: "Divide 72 worker-days by 9 workers to find the days.",
      hintAudioText: "Divide 72 worker-days by 9 workers to find the days.",
      explanation: "d = 72 ÷ 9 = 8 days.",
      visual: { kind: 'eq', text: '9 × d = 72' },
      audioKey: "q_w1_10", hintAudioKey: "hint_w1_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 2: Table Town (Q21–30) · Difficulty: 2
  // -------------------------------------------------------------------------
  [
    {
      id: "w2_q1", worldIndex: 2, qNum: 21,
      rule: "TABLE RULE",
      prompt: "In an inverse proportion table, when x = 2, y = 18. What is y when x = 6?",
      audioText: "In an inverse proportion table, when x equals 2, y equals 18. What is y when x equals 6?",
      options: ["y = 6", "y = 54", "y = 9", "y = 3"],
      correctIndex: 0,
      hint: "Multiply 2 by 18 to find k = 36. Then divide 36 by 6.",
      hintAudioText: "Multiply 2 by 18 to find k equals 36. Then divide 36 by 6.",
      explanation: "k = 2 × 18 = 36. y = 36 ÷ 6 = 6.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[2, 18], [6, '?']] },
      audioKey: "q_w2_1", hintAudioKey: "hint_w2_1"
    },
    {
      id: "w2_q2", worldIndex: 2, qNum: 22,
      rule: "SPOT IT RULE",
      prompt: "Which set of coordinate pairs represents inverse proportion?",
      audioText: "Which set of coordinate pairs represents inverse proportion?",
      options: ["(2, 24), (3, 16), (4, 12)", "(2, 4), (3, 6), (4, 8)", "(2, 10), (3, 11), (4, 12)", "(2, 12), (3, 8), (4, 5)"],
      correctIndex: 0,
      hint: "In inverse proportion, every pair multiplies to the same constant product k. Notice 2 times 24 is 48, 3 times 16 is 48, 4 times 12 is 48.",
      hintAudioText: "In inverse proportion, every pair multiplies to the same constant product k. Notice 2 times 24 is 48, 3 times 16 is 48, 4 times 12 is 48.",
      explanation: "In (2, 24), (3, 16), (4, 12), each product is 48.",
      visual: { kind: 'eq', text: 'xy = constant' },
      audioKey: "q_w2_2", hintAudioKey: "hint_w2_2"
    },
    {
      id: "w2_q3", worldIndex: 2, qNum: 23,
      rule: "TABLE RULE",
      prompt: "In an inverse proportion table where xy = 48, what is the value of x when y = 4?",
      audioText: "In an inverse proportion table where x times y equals 48, what is the value of x when y equals 4?",
      options: ["x = 12", "x = 192", "x = 44", "x = 8"],
      correctIndex: 0,
      hint: "Divide the constant product 48 by y, which is 4.",
      hintAudioText: "Divide the constant product 48 by y, which is 4.",
      explanation: "x = 48 ÷ 4 = 12.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [['?', 4]] },
      audioKey: "q_w2_3", hintAudioKey: "hint_w2_3"
    },
    {
      id: "w2_q4", worldIndex: 2, qNum: 24,
      rule: "TABLE RULE",
      prompt: "In an inverse table, column 1 has x = 3, y = 20. If x = 5, what is y?",
      audioText: "In an inverse table, column 1 has x equals 3, y equals 20. If x equals 5, what is y?",
      options: ["y = 12", "y = 33.3", "y = 15", "y = 8"],
      correctIndex: 0,
      hint: "Find the constant product: 3 times 20 is 60. Then divide 60 by 5.",
      hintAudioText: "Find the constant product: 3 times 20 is 60. Then divide 60 by 5.",
      explanation: "k = 3 × 20 = 60. y = 60 ÷ 5 = 12.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[3, 20], [5, '?']] },
      audioKey: "q_w2_4", hintAudioKey: "hint_w2_4"
    },
    {
      id: "w2_q5", worldIndex: 2, qNum: 25,
      rule: "SPOT IT RULE",
      prompt: "Which set of pairs shows inverse proportion?",
      audioText: "Which set of pairs shows inverse proportion?",
      options: ["(2, 30), (3, 20), (5, 12)", "(2, 4), (3, 6), (5, 10)", "(2, 7), (3, 8), (5, 10)", "(2, 25), (3, 20), (5, 15)"],
      correctIndex: 0,
      hint: "Multiply x and y in each pair: 2 times 30 is 60, 3 times 20 is 60, 5 times 12 is 60. Constant product means inverse proportion.",
      hintAudioText: "Multiply x and y in each pair: 2 times 30 is 60, 3 times 20 is 60, 5 times 12 is 60. Constant product means inverse proportion.",
      explanation: "Each product equals 60: 2×30 = 3×20 = 5×12 = 60.",
      visual: { kind: 'eq', text: 'x × y = 60' },
      audioKey: "q_w2_5", hintAudioKey: "hint_w2_5"
    },
    {
      id: "w2_q6", worldIndex: 2, qNum: 26,
      rule: "TABLE RULE",
      prompt: "An inverse table has points (4, 15) and (6, y). Find the missing value y.",
      audioText: "An inverse table has points 4 comma 15 and 6 comma y. Find the missing value y.",
      options: ["y = 10", "y = 22.5", "y = 12", "y = 8"],
      correctIndex: 0,
      hint: "4 times 15 is 60. Divide 60 by 6 to find y.",
      hintAudioText: "4 times 15 is 60. Divide 60 by 6 to find y.",
      explanation: "k = 4 × 15 = 60. y = 60 ÷ 6 = 10.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[4, 15], [6, '?']] },
      audioKey: "q_w2_6", hintAudioKey: "hint_w2_6"
    },
    {
      id: "w2_q7", worldIndex: 2, qNum: 27,
      rule: "TABLE RULE",
      prompt: "If x and y are inversely proportional, and when x = 1, y = 72, what is y when x = 8?",
      audioText: "If x and y are inversely proportional, and when x equals 1, y equals 72, what is y when x equals 8?",
      options: ["y = 9", "y = 576", "y = 8", "y = 12"],
      correctIndex: 0,
      hint: "The constant product is 1 times 72, which is 72. Divide 72 by 8.",
      hintAudioText: "The constant product is 1 times 72, which is 72. Divide 72 by 8.",
      explanation: "k = 1 × 72 = 72. y = 72 ÷ 8 = 9.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[1, 72], [8, '?']] },
      audioKey: "q_w2_7", hintAudioKey: "hint_w2_7"
    },
    {
      id: "w2_q8", worldIndex: 2, qNum: 28,
      rule: "TABLE RULE",
      prompt: "A table has x values 2, 4, 8 and corresponding y values 20, 10, y. What is the missing y?",
      audioText: "A table has x values 2, 4, 8 and corresponding y values 20, 10, y. What is the missing y?",
      options: ["y = 5", "y = 40", "y = 2", "y = 8"],
      correctIndex: 0,
      hint: "Notice each pair multiplies to 40: 2 times 20 is 40. Divide 40 by 8.",
      hintAudioText: "Notice each pair multiplies to 40: 2 times 20 is 40. Divide 40 by 8.",
      explanation: "k = 2 × 20 = 40. y = 40 ÷ 8 = 5.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[2, 20], [4, 10], [8, '?']] },
      audioKey: "q_w2_8", hintAudioKey: "hint_w2_8"
    },
    {
      id: "w2_q9", worldIndex: 2, qNum: 29,
      rule: "SPOT IT RULE",
      prompt: "Which equation matches a table containing points (2, 30) and (5, 12)?",
      audioText: "Which equation matches a table containing points 2 comma 30 and 5 comma 12?",
      options: ["xy = 60", "y = 15x", "y = x + 28", "y/x = 15"],
      correctIndex: 0,
      hint: "Multiply x and y: 2 times 30 is 60, and 5 times 12 is 60. The equation is xy = 60.",
      hintAudioText: "Multiply x and y: 2 times 30 is 60, and 5 times 12 is 60. The equation is x times y equals 60.",
      explanation: "Product xy = 2 × 30 = 60.",
      visual: { kind: 'eq', text: 'xy = 60' },
      audioKey: "q_w2_9", hintAudioKey: "hint_w2_9"
    },
    {
      id: "w2_q10", worldIndex: 2, qNum: 30,
      rule: "TABLE RULE",
      prompt: "In an inverse proportion table where k = 90, what is y when x = 15?",
      audioText: "In an inverse proportion table where k equals 90, what is y when x equals 15?",
      options: ["y = 6", "y = 1350", "y = 5", "y = 10"],
      correctIndex: 0,
      hint: "Divide the constant 90 by 15.",
      hintAudioText: "Divide the constant 90 by 15.",
      explanation: "y = 90 ÷ 15 = 6.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[15, '?']] },
      audioKey: "q_w2_10", hintAudioKey: "hint_w2_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 3: Speedway (Q31–40) · Difficulty: 2
  // -------------------------------------------------------------------------
  [
    {
      id: "w3_q1", worldIndex: 3, qNum: 31,
      rule: "SPEED RULE",
      prompt: "A sports car travels at 60 km/h and takes 4 hours for a trip. How long would the trip take at 80 km/h?",
      audioText: "A sports car travels at 60 kilometres per hour and takes 4 hours for a trip. How long would the trip take at 80 kilometres per hour?",
      options: ["3 hours", "5.33 hours", "2 hours", "4.5 hours"],
      correctIndex: 0,
      hint: "Distance is constant: 60 times 4 is 240 kilometres. Divide 240 by 80 kilometres per hour.",
      hintAudioText: "Distance is constant: 60 times 4 is 240 kilometres. Divide 240 by 80 kilometres per hour.",
      explanation: "Distance = 60 × 4 = 240 km. Time = 240 ÷ 80 = 3 hours.",
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (h)', rows: [[60, 4], [80, '?']] },
      audioKey: "q_w3_1", hintAudioKey: "hint_w3_1"
    },
    {
      id: "w3_q2", worldIndex: 3, qNum: 32,
      rule: "SPEED RULE",
      prompt: "A racing car travels at 120 km/h and finishes a lap in 3 minutes. How long would the lap take at 180 km/h?",
      audioText: "A racing car travels at 120 kilometres per hour and finishes a lap in 3 minutes. How long would the lap take at 180 kilometres per hour?",
      options: ["2 minutes", "4.5 minutes", "1 minute", "2.5 minutes"],
      correctIndex: 0,
      hint: "Faster speed means less time! 120 times 3 is 360. Divide 360 by 180.",
      hintAudioText: "Faster speed means less time! 120 times 3 is 360. Divide 360 by 180.",
      explanation: "Constant = 120 × 3 = 360. 360 ÷ 180 = 2 minutes.",
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (min)', rows: [[120, 3], [180, '?']] },
      audioKey: "q_w3_2", hintAudioKey: "hint_w3_2"
    },
    {
      id: "w3_q3", worldIndex: 3, qNum: 33,
      rule: "SPEED RULE",
      prompt: "A cyclist travels at 15 km/h for 4 hours to reach town. How long would a motorist take at 60 km/h?",
      audioText: "A cyclist travels at 15 kilometres per hour for 4 hours to reach town. How long would a motorist take at 60 kilometres per hour?",
      options: ["1 hour", "16 hours", "2 hours", "0.5 hours"],
      correctIndex: 0,
      hint: "Find distance: 15 times 4 equals 60 kilometres. Divide 60 kilometres by 60 kilometres per hour.",
      hintAudioText: "Find distance: 15 times 4 equals 60 kilometres. Divide 60 kilometres by 60 kilometres per hour.",
      explanation: "Distance = 15 × 4 = 60 km. Time = 60 ÷ 60 = 1 hour.",
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (h)', rows: [[15, 4], [60, '?']] },
      audioKey: "q_w3_3", hintAudioKey: "hint_w3_3"
    },
    {
      id: "w3_q4", worldIndex: 3, qNum: 34,
      rule: "SPEED RULE",
      prompt: "A train takes 6 hours to cover a route at 50 km/h. What speed is needed to complete the trip in 5 hours?",
      audioText: "A train takes 6 hours to cover a route at 50 kilometres per hour. What speed is needed to complete the trip in 5 hours?",
      options: ["60 km/h", "41.7 km/h", "55 km/h", "75 km/h"],
      correctIndex: 0,
      hint: "Total distance is 50 times 6 equals 300 kilometres. Divide 300 by 5 hours.",
      hintAudioText: "Total distance is 50 times 6 equals 300 kilometres. Divide 300 by 5 hours.",
      explanation: "Distance = 50 × 6 = 300 km. Speed = 300 ÷ 5 = 60 km/h.",
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (h)', rows: [[50, 6], ['?', 5]] },
      audioKey: "q_w3_4", hintAudioKey: "hint_w3_4"
    },
    {
      id: "w3_q5", worldIndex: 3, qNum: 35,
      rule: "SCALE RULE",
      prompt: "If speed s is doubled on a fixed trip, what happens to the travel time t?",
      audioText: "If speed s is doubled on a fixed trip, what happens to the travel time t?",
      options: ["Time is halved", "Time is doubled", "Time stays same", "Time decreases by 2"],
      correctIndex: 0,
      hint: "Speed and time are inversely proportional: speed times time equals distance. Doubling speed cuts time in half.",
      hintAudioText: "Speed and time are inversely proportional: speed times time equals distance. Doubling speed cuts time in half.",
      explanation: "Since s × t = d, multiplying s by 2 divides t by 2.",
      visual: { kind: 'eq', text: 'speed × 2 → time ÷ 2' },
      audioKey: "q_w3_5", hintAudioKey: "hint_w3_5"
    },
    {
      id: "w3_q6", worldIndex: 3, qNum: 36,
      rule: "SPEED RULE",
      prompt: "A delivery van travels at 40 km/h and takes 6 hours. If the driver travels at 30 km/h instead, how long will it take?",
      audioText: "A delivery van travels at 40 kilometres per hour and takes 6 hours. If the driver travels at 30 kilometres per hour instead, how long will it take?",
      options: ["8 hours", "4.5 hours", "7 hours", "10 hours"],
      correctIndex: 0,
      hint: "Distance is 40 times 6 equals 240 kilometres. Divide 240 by 30 kilometres per hour.",
      hintAudioText: "Distance is 40 times 6 equals 240 kilometres. Divide 240 by 30 kilometres per hour.",
      explanation: "Distance = 40 × 6 = 240 km. Time = 240 ÷ 30 = 8 hours.",
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (h)', rows: [[40, 6], [30, '?']] },
      audioKey: "q_w3_6", hintAudioKey: "hint_w3_6"
    },
    {
      id: "w3_q7", worldIndex: 3, qNum: 37,
      rule: "SPEED RULE",
      prompt: "An express train covers 360 km at 90 km/h in 4 hours. How long would a freight train take at 45 km/h?",
      audioText: "An express train covers 360 kilometres at 90 kilometres per hour in 4 hours. How long would a freight train take at 45 kilometres per hour?",
      options: ["8 hours", "2 hours", "6 hours", "10 hours"],
      correctIndex: 0,
      hint: "Half the speed means twice the time! 360 divided by 45 is 8 hours.",
      hintAudioText: "Half the speed means twice the time! 360 divided by 45 is 8 hours.",
      explanation: "360 ÷ 45 = 8 hours.",
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (h)', rows: [[90, 4], [45, '?']] },
      audioKey: "q_w3_7", hintAudioKey: "hint_w3_7"
    },
    {
      id: "w3_q8", worldIndex: 3, qNum: 38,
      rule: "SPEED RULE",
      prompt: "A boat travels at 30 km/h and finishes a course in 4 hours. How fast must it travel to finish in 3 hours?",
      audioText: "A boat travels at 30 kilometres per hour and finishes a course in 4 hours. How fast must it travel to finish in 3 hours?",
      options: ["40 km/h", "22.5 km/h", "35 km/h", "50 km/h"],
      correctIndex: 0,
      hint: "Course distance is 30 times 4 equals 120 kilometres. Divide 120 by 3 hours.",
      hintAudioText: "Course distance is 30 times 4 equals 120 kilometres. Divide 120 by 3 hours.",
      explanation: "Distance = 30 × 4 = 120 km. Speed = 120 ÷ 3 = 40 km/h.",
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (h)', rows: [[30, 4], ['?', 3]] },
      audioKey: "q_w3_8", hintAudioKey: "hint_w3_8"
    },
    {
      id: "w3_q9", worldIndex: 3, qNum: 39,
      rule: "FORMULA RULE",
      prompt: "Which equation shows that travel time t is inversely proportional to speed s for a 180 km trip?",
      audioText: "Which equation shows that travel time t is inversely proportional to speed s for a 180 kilometre trip?",
      options: ["t = 180/s", "t = 180s", "t = s + 180", "s/t = 180"],
      correctIndex: 0,
      hint: "Time equals distance divided by speed: t = 180/s.",
      hintAudioText: "Time equals distance divided by speed: t equals 180 divided by s.",
      explanation: "t = distance / speed = 180/s.",
      visual: { kind: 'eq', text: 't = 180 ÷ s' },
      audioKey: "q_w3_9", hintAudioKey: "hint_w3_9"
    },
    {
      id: "w3_q10", worldIndex: 3, qNum: 40,
      rule: "SPEED RULE",
      prompt: "A runner running at 12 km/h finishes a circuit in 30 minutes. How long would a cyclist at 24 km/h take?",
      audioText: "A runner running at 12 kilometres per hour finishes a circuit in 30 minutes. How long would a cyclist at 24 kilometres per hour take?",
      options: ["15 minutes", "60 minutes", "20 minutes", "10 minutes"],
      correctIndex: 0,
      hint: "Doubling the speed cuts the time in half! 30 divided by 2 is 15 minutes.",
      hintAudioText: "Doubling the speed cuts the time in half! 30 divided by 2 is 15 minutes.",
      explanation: "Constant = 12 × 30 = 360. 360 ÷ 24 = 15 minutes.",
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (min)', rows: [[12, 30], [24, '?']] },
      audioKey: "q_w3_10", hintAudioKey: "hint_w3_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 4: Water Works (Q41–50) · Difficulty: 3
  // -------------------------------------------------------------------------
  [
    {
      id: "w4_q1", worldIndex: 4, qNum: 41,
      rule: "WORK RULE",
      prompt: "3 identical water pumps can fill a reservoir in 8 hours. How many hours would 6 identical pumps take?",
      audioText: "3 identical water pumps can fill a reservoir in 8 hours. How many hours would 6 identical pumps take?",
      options: ["4 hours", "16 hours", "2 hours", "6 hours"],
      correctIndex: 0,
      hint: "Twice as many pumps take half the time! 3 times 8 is 24 pump-hours. Divide 24 by 6.",
      hintAudioText: "Twice as many pumps take half the time! 3 times 8 is 24 pump-hours. Divide 24 by 6.",
      explanation: "Total = 3 × 8 = 24 pump-hours. 24 ÷ 6 = 4 hours.",
      visual: { kind: 'icons', icon: '🚰', count: 6, label: '24 pump-hours ÷ 6 pumps' },
      audioKey: "q_w4_1", hintAudioKey: "hint_w4_1"
    },
    {
      id: "w4_q2", worldIndex: 4, qNum: 42,
      rule: "WORK RULE",
      prompt: "4 identical taps fill a swimming pool in 15 hours. How long would 5 identical taps take?",
      audioText: "4 identical taps fill a swimming pool in 15 hours. How long would 5 identical taps take?",
      options: ["12 hours", "18.75 hours", "10 hours", "8 hours"],
      correctIndex: 0,
      hint: "Total capacity is 4 times 15 equals 60 tap-hours. Divide 60 by 5.",
      hintAudioText: "Total capacity is 4 times 15 equals 60 tap-hours. Divide 60 by 5.",
      explanation: "Total = 4 × 15 = 60 tap-hours. 60 ÷ 5 = 12 hours.",
      visual: { kind: 'table', xLabel: 'Taps', yLabel: 'Hours', rows: [[4, 15], [5, '?']] },
      audioKey: "q_w4_2", hintAudioKey: "hint_w4_2"
    },
    {
      id: "w4_q3", worldIndex: 4, qNum: 43,
      rule: "WORK RULE",
      prompt: "2 drainage pipes empty a flooded basement in 18 hours. How many pipes are needed to empty it in 6 hours?",
      audioText: "2 drainage pipes empty a flooded basement in 18 hours. How many pipes are needed to empty it in 6 hours?",
      options: ["6 pipes", "3 pipes", "4 pipes", "8 pipes"],
      correctIndex: 0,
      hint: "Total work is 2 times 18 equals 36 pipe-hours. Divide 36 by 6 hours.",
      hintAudioText: "Total work is 2 times 18 equals 36 pipe-hours. Divide 36 by 6 hours.",
      explanation: "Total = 2 × 18 = 36 pipe-hours. 36 ÷ 6 = 6 pipes.",
      visual: { kind: 'table', xLabel: 'Pipes', yLabel: 'Hours', rows: [[2, 18], ['?', 6]] },
      audioKey: "q_w4_3", hintAudioKey: "hint_w4_3"
    },
    {
      id: "w4_q4", worldIndex: 4, qNum: 44,
      rule: "WORK RULE",
      prompt: "5 identical pumps fill a tank in 6 hours. If 2 pumps break down, leaving 3 pumps working, how long will it take?",
      audioText: "5 identical pumps fill a tank in 6 hours. If 2 pumps break down, leaving 3 pumps working, how long will it take?",
      options: ["10 hours", "3.6 hours", "8 hours", "12 hours"],
      correctIndex: 0,
      hint: "Total work is 5 times 6 is 30 pump-hours. With 3 pumps, divide 30 by 3.",
      hintAudioText: "Total work is 5 times 6 is 30 pump-hours. With 3 pumps, divide 30 by 3.",
      explanation: "Total = 5 × 6 = 30 pump-hours. 30 ÷ 3 = 10 hours.",
      visual: { kind: 'table', xLabel: 'Pumps', yLabel: 'Hours', rows: [[5, 6], [3, '?']] },
      audioKey: "q_w4_4", hintAudioKey: "hint_w4_4"
    },
    {
      id: "w4_q5", worldIndex: 4, qNum: 45,
      rule: "WORK RULE",
      prompt: "8 pipes fill a cooling tower in 9 hours. How many hours would 12 pipes take?",
      audioText: "8 pipes fill a cooling tower in 9 hours. How many hours would 12 pipes take?",
      options: ["6 hours", "13.5 hours", "4 hours", "8 hours"],
      correctIndex: 0,
      hint: "Total work is 8 times 9 equals 72 pipe-hours. Divide 72 by 12.",
      hintAudioText: "Total work is 8 times 9 equals 72 pipe-hours. Divide 72 by 12.",
      explanation: "Total = 8 × 9 = 72 pipe-hours. 72 ÷ 12 = 6 hours.",
      visual: { kind: 'table', xLabel: 'Pipes', yLabel: 'Hours', rows: [[8, 9], [12, '?']] },
      audioKey: "q_w4_5", hintAudioKey: "hint_w4_5"
    },
    {
      id: "w4_q6", worldIndex: 4, qNum: 46,
      rule: "WORK RULE",
      prompt: "A tank is filled by 6 taps in 20 minutes. How many taps would fill the same tank in 15 minutes?",
      audioText: "A tank is filled by 6 taps in 20 minutes. How many taps would fill the same tank in 15 minutes?",
      options: ["8 taps", "5 taps", "10 taps", "12 taps"],
      correctIndex: 0,
      hint: "6 times 20 is 120 tap-minutes. Divide 120 by 15 minutes.",
      hintAudioText: "6 times 20 is 120 tap-minutes. Divide 120 by 15 minutes.",
      explanation: "Total = 6 × 20 = 120 tap-minutes. 120 ÷ 15 = 8 taps.",
      visual: { kind: 'table', xLabel: 'Taps', yLabel: 'Minutes', rows: [[6, 20], ['?', 15]] },
      audioKey: "q_w4_6", hintAudioKey: "hint_w4_6"
    },
    {
      id: "w4_q7", worldIndex: 4, qNum: 47,
      rule: "SCALE RULE",
      prompt: "If the number of identical taps filling a cistern is tripled, what happens to the filling time?",
      audioText: "If the number of identical taps filling a cistern is tripled, what happens to the filling time?",
      options: ["Time is divided by 3", "Time is tripled", "Time stays same", "Time decreases by 3"],
      correctIndex: 0,
      hint: "Taps and time are inversely proportional. Tripling taps divides time by 3.",
      hintAudioText: "Taps and time are inversely proportional. Tripling taps divides time by 3.",
      explanation: "More taps mean proportionally less time: time ÷ 3.",
      visual: { kind: 'eq', text: 'taps × 3 → time ÷ 3' },
      audioKey: "q_w4_7", hintAudioKey: "hint_w4_7"
    },
    {
      id: "w4_q8", worldIndex: 4, qNum: 48,
      rule: "WORK RULE",
      prompt: "1 large pump takes 48 hours to empty a reservoir. How many hours will 4 identical pumps take?",
      audioText: "1 large pump takes 48 hours to empty a reservoir. How many hours will 4 identical pumps take?",
      options: ["12 hours", "192 hours", "16 hours", "24 hours"],
      correctIndex: 0,
      hint: "Divide the single pump's 48 hours by 4 pumps.",
      hintAudioText: "Divide the single pump's 48 hours by 4 pumps.",
      explanation: "48 ÷ 4 = 12 hours.",
      visual: { kind: 'table', xLabel: 'Pumps', yLabel: 'Hours', rows: [[1, 48], [4, '?']] },
      audioKey: "q_w4_8", hintAudioKey: "hint_w4_8"
    },
    {
      id: "w4_q9", worldIndex: 4, qNum: 49,
      rule: "WORK RULE",
      prompt: "10 taps fill an Olympic pool in 12 hours. How many taps are needed to fill it in 8 hours?",
      audioText: "10 taps fill an Olympic pool in 12 hours. How many taps are needed to fill it in 8 hours?",
      options: ["15 taps", "7 taps", "12 taps", "20 taps"],
      correctIndex: 0,
      hint: "Total capacity is 10 times 12 equals 120 tap-hours. Divide 120 by 8.",
      hintAudioText: "Total capacity is 10 times 12 equals 120 tap-hours. Divide 120 by 8.",
      explanation: "Total = 10 × 12 = 120 tap-hours. 120 ÷ 8 = 15 taps.",
      visual: { kind: 'table', xLabel: 'Taps', yLabel: 'Hours', rows: [[10, 12], ['?', 8]] },
      audioKey: "q_w4_9", hintAudioKey: "hint_w4_9"
    },
    {
      id: "w4_q10", worldIndex: 4, qNum: 50,
      rule: "WORK RULE",
      prompt: "4 pumps empty a dock in 18 hours. How long would 9 pumps take?",
      audioText: "4 pumps empty a dock in 18 hours. How long would 9 pumps take?",
      options: ["8 hours", "40.5 hours", "6 hours", "10 hours"],
      correctIndex: 0,
      hint: "4 times 18 is 72 pump-hours. Divide 72 by 9.",
      hintAudioText: "4 times 18 is 72 pump-hours. Divide 72 by 9.",
      explanation: "Total = 4 × 18 = 72 pump-hours. 72 ÷ 9 = 8 hours.",
      visual: { kind: 'table', xLabel: 'Pumps', yLabel: 'Hours', rows: [[4, 18], [9, '?']] },
      audioKey: "q_w4_10", hintAudioKey: "hint_w4_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 5: Campfire Camp (Q51–60) · Difficulty: 3
  // -------------------------------------------------------------------------
  [
    {
      id: "w5_q1", worldIndex: 5, qNum: 51,
      rule: "SHARING RULE",
      prompt: "A scout camp has food for 20 campers for 15 days. If 30 campers attend instead, how many days will the food last?",
      audioText: "A scout camp has food for 20 campers for 15 days. If 30 campers attend instead, how many days will the food last?",
      options: ["10 days", "22.5 days", "12 days", "8 days"],
      correctIndex: 0,
      hint: "Calculate camper-days: 20 times 15 equals 300 camper-days. Divide 300 by 30 campers.",
      hintAudioText: "Calculate camper-days: 20 times 15 equals 300 camper-days. Divide 300 by 30 campers.",
      explanation: "Total = 20 × 15 = 300 camper-days. 300 ÷ 30 = 10 days.",
      visual: { kind: 'table', xLabel: 'Campers', yLabel: 'Days', rows: [[20, 15], [30, '?']] },
      audioKey: "q_w5_1", hintAudioKey: "hint_w5_1"
    },
    {
      id: "w5_q2", worldIndex: 5, qNum: 52,
      rule: "SHARING RULE",
      prompt: "A hostel has food for 12 backpackers for 20 days. If 4 more backpackers arrive, making 16 backpackers, how many days will food last?",
      audioText: "A hostel has food for 12 backpackers for 20 days. If 4 more backpackers arrive, making 16 backpackers, how many days will food last?",
      options: ["15 days", "26.7 days", "16 days", "10 days"],
      correctIndex: 0,
      hint: "Total food is 12 times 20 equals 240 person-days. Divide 240 by 16 backpackers.",
      hintAudioText: "Total food is 12 times 20 equals 240 person-days. Divide 240 by 16 backpackers.",
      explanation: "Total = 12 × 20 = 240 person-days. 240 ÷ 16 = 15 days.",
      visual: { kind: 'table', xLabel: 'Backpackers', yLabel: 'Days', rows: [[12, 20], [16, '?']] },
      audioKey: "q_w5_2", hintAudioKey: "hint_w5_2"
    },
    {
      id: "w5_q3", worldIndex: 5, qNum: 53,
      rule: "SHARING RULE",
      prompt: "Provisions last 40 people for 18 days. If 10 people leave, leaving 30 people, how many days will the food last?",
      audioText: "Provisions last 40 people for 18 days. If 10 people leave, leaving 30 people, how many days will the food last?",
      options: ["24 days", "13.5 days", "20 days", "28 days"],
      correctIndex: 0,
      hint: "Fewer people means food lasts longer! 40 times 18 is 720. Divide 720 by 30.",
      hintAudioText: "Fewer people means food lasts longer! 40 times 18 is 720. Divide 720 by 30.",
      explanation: "Total = 40 × 18 = 720 person-days. 720 ÷ 30 = 24 days.",
      visual: { kind: 'table', xLabel: 'People', yLabel: 'Days', rows: [[40, 18], [30, '?']] },
      audioKey: "q_w5_3", hintAudioKey: "hint_w5_3"
    },
    {
      id: "w5_q4", worldIndex: 5, qNum: 54,
      rule: "SHARING RULE",
      prompt: "A stable has grain for 15 horses for 24 days. How many days will the grain last for 18 horses?",
      audioText: "A stable has grain for 15 horses for 24 days. How many days will the grain last for 18 horses?",
      options: ["20 days", "28.8 days", "16 days", "22 days"],
      correctIndex: 0,
      hint: "15 times 24 equals 360 horse-days. Divide 360 by 18 horses.",
      hintAudioText: "15 times 24 equals 360 horse-days. Divide 360 by 18 horses.",
      explanation: "Total = 15 × 24 = 360 horse-days. 360 ÷ 18 = 20 days.",
      visual: { kind: 'table', xLabel: 'Horses', yLabel: 'Days', rows: [[15, 24], [18, '?']] },
      audioKey: "q_w5_4", hintAudioKey: "hint_w5_4"
    },
    {
      id: "w5_q5", worldIndex: 5, qNum: 55,
      rule: "SCALE RULE",
      prompt: "In an inverse proportion, if quantity x is multiplied by 4, what happens to quantity y?",
      audioText: "In an inverse proportion, if quantity x is multiplied by 4, what happens to quantity y?",
      options: ["y is divided by 4", "y is multiplied by 4", "y stays same", "y increases by 4"],
      correctIndex: 0,
      hint: "Inverse proportion means opposite scaling: multiplying one variable by 4 divides the other by 4.",
      hintAudioText: "Inverse proportion means opposite scaling: multiplying one variable by 4 divides the other by 4.",
      explanation: "xy = k, so if x is multiplied by 4, y must be divided by 4.",
      visual: { kind: 'eq', text: 'x × 4 → y ÷ 4' },
      audioKey: "q_w5_5", hintAudioKey: "hint_w5_5"
    },
    {
      id: "w5_q6", worldIndex: 5, qNum: 56,
      rule: "SHARING RULE",
      prompt: "A crate feeds 25 explorers for 12 days. How many explorers would consume the crate in 10 days?",
      audioText: "A crate feeds 25 explorers for 12 days. How many explorers would consume the crate in 10 days?",
      options: ["30 explorers", "21 explorers", "28 explorers", "35 explorers"],
      correctIndex: 0,
      hint: "25 times 12 is 300 explorer-days. Divide 300 by 10 days.",
      hintAudioText: "25 times 12 is 300 explorer-days. Divide 300 by 10 days.",
      explanation: "Total = 25 × 12 = 300 explorer-days. 300 ÷ 10 = 30 explorers.",
      visual: { kind: 'table', xLabel: 'Explorers', yLabel: 'Days', rows: [[25, 12], ['?', 10]] },
      audioKey: "q_w5_6", hintAudioKey: "hint_w5_6"
    },
    {
      id: "w5_q7", worldIndex: 5, qNum: 57,
      rule: "SHARING RULE",
      prompt: "An expedition has water for 8 hikers for 9 days. How many days would the water last for 12 hikers?",
      audioText: "An expedition has water for 8 hikers for 9 days. How many days would the water last for 12 hikers?",
      options: ["6 days", "13.5 days", "7 days", "5 days"],
      correctIndex: 0,
      hint: "8 times 9 equals 72 hiker-days of water. Divide 72 by 12 hikers.",
      hintAudioText: "8 times 9 equals 72 hiker-days of water. Divide 72 by 12 hikers.",
      explanation: "Total = 8 × 9 = 72 hiker-days. 72 ÷ 12 = 6 days.",
      visual: { kind: 'table', xLabel: 'Hikers', yLabel: 'Days', rows: [[8, 9], [12, '?']] },
      audioKey: "q_w5_7", hintAudioKey: "hint_w5_7"
    },
    {
      id: "w5_q8", worldIndex: 5, qNum: 58,
      rule: "PRODUCT RULE",
      prompt: "If camper count c and days d satisfy cd = 480, how many days will food last for 32 campers?",
      audioText: "If camper count c and days d satisfy c times d equals 480, how many days will food last for 32 campers?",
      options: ["15 days", "15360 days", "12 days", "18 days"],
      correctIndex: 0,
      hint: "Divide 480 by 32 campers.",
      hintAudioText: "Divide 480 by 32 campers.",
      explanation: "d = 480 ÷ 32 = 15 days.",
      visual: { kind: 'eq', text: '32 × d = 480' },
      audioKey: "q_w5_8", hintAudioKey: "hint_w5_8"
    },
    {
      id: "w5_q9", worldIndex: 5, qNum: 59,
      rule: "SHARING RULE",
      prompt: "Food lasts 16 campers for 30 days. If 8 campers join, making 24 campers, how many days will food last?",
      audioText: "Food lasts 16 campers for 30 days. If 8 campers join, making 24 campers, how many days will food last?",
      options: ["20 days", "45 days", "22 days", "18 days"],
      correctIndex: 0,
      hint: "16 times 30 is 480 camper-days. Divide 480 by 24 campers.",
      hintAudioText: "16 times 30 is 480 camper-days. Divide 480 by 24 campers.",
      explanation: "Total = 16 × 30 = 480 camper-days. 480 ÷ 24 = 20 days.",
      visual: { kind: 'table', xLabel: 'Campers', yLabel: 'Days', rows: [[16, 30], [24, '?']] },
      audioKey: "q_w5_9", hintAudioKey: "hint_w5_9"
    },
    {
      id: "w5_q10", worldIndex: 5, qNum: 60,
      rule: "SHARING RULE",
      prompt: "A camp has firewood for 6 cabins for 28 days. How many cabins can be heated for 14 days with the same firewood?",
      audioText: "A camp has firewood for 6 cabins for 28 days. How many cabins can be heated for 14 days with the same firewood?",
      options: ["12 cabins", "3 cabins", "8 cabins", "16 cabins"],
      correctIndex: 0,
      hint: "Half the duration allows twice as many cabins! 6 times 28 is 168. Divide 168 by 14.",
      hintAudioText: "Half the duration allows twice as many cabins! 6 times 28 is 168. Divide 168 by 14.",
      explanation: "Total = 6 × 28 = 168 cabin-days. 168 ÷ 14 = 12 cabins.",
      visual: { kind: 'table', xLabel: 'Cabins', yLabel: 'Days', rows: [[6, 28], ['?', 14]] },
      audioKey: "q_w5_10", hintAudioKey: "hint_w5_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 6: Formula Forge (Q61–70) · Difficulty: 3
  // -------------------------------------------------------------------------
  [
    {
      id: "w6_q1", worldIndex: 6, qNum: 61,
      rule: "FORMULA RULE",
      prompt: "y is inversely proportional to x. When x = 6, y = 14. Find y when x = 21.",
      audioText: "y is inversely proportional to x. When x equals 6, y equals 14. Find y when x equals 21.",
      options: ["y = 4", "y = 49", "y = 7", "y = 3"],
      correctIndex: 0,
      hint: "Find k: 6 times 14 equals 84. Then calculate y: 84 divided by 21 equals 4.",
      hintAudioText: "Find k: 6 times 14 equals 84. Then calculate y: 84 divided by 21 equals 4.",
      explanation: "k = 6 × 14 = 84. y = 84 ÷ 21 = 4.",
      visual: { kind: 'eq', text: 'y = k ÷ x' },
      audioKey: "q_w6_1", hintAudioKey: "hint_w6_1"
    },
    {
      id: "w6_q2", worldIndex: 6, qNum: 62,
      rule: "FORMULA RULE",
      prompt: "Two variables satisfy xy = 120. Find x when y = 15.",
      audioText: "Two variables satisfy x times y equals 120. Find x when y equals 15.",
      options: ["x = 8", "x = 1800", "x = 6", "x = 10"],
      correctIndex: 0,
      hint: "Rearrange to x = 120/y. Divide 120 by 15.",
      hintAudioText: "Rearrange to x equals 120 divided by y. Divide 120 by 15.",
      explanation: "x = 120 ÷ 15 = 8.",
      visual: { kind: 'eq', text: 'x = 120 ÷ 15' },
      audioKey: "q_w6_2", hintAudioKey: "hint_w6_2"
    },
    {
      id: "w6_q3", worldIndex: 6, qNum: 63,
      rule: "FORMULA RULE",
      prompt: "If y = 96/x, what is the value of y when x = 16?",
      audioText: "If y equals 96 divided by x, what is the value of y when x equals 16?",
      options: ["y = 6", "y = 1536", "y = 8", "y = 4"],
      correctIndex: 0,
      hint: "Substitute 16 into the formula: 96 divided by 16.",
      hintAudioText: "Substitute 16 into the formula: 96 divided by 16.",
      explanation: "y = 96 ÷ 16 = 6.",
      visual: { kind: 'eq', text: 'y = 96 ÷ 16' },
      audioKey: "q_w6_3", hintAudioKey: "hint_w6_3"
    },
    {
      id: "w6_q4", worldIndex: 6, qNum: 64,
      rule: "FORMULA RULE",
      prompt: "y is inversely proportional to x. When x = 5, y = 36. What is x when y = 20?",
      audioText: "y is inversely proportional to x. When x equals 5, y equals 36. What is x when y equals 20?",
      options: ["x = 9", "x = 144", "x = 8", "x = 12"],
      correctIndex: 0,
      hint: "k is 5 times 36 equals 180. To find x, divide 180 by 20.",
      hintAudioText: "k is 5 times 36 equals 180. To find x, divide 180 by 20.",
      explanation: "k = 5 × 36 = 180. x = 180 ÷ 20 = 9.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[5, 36], ['?', 20]] },
      audioKey: "q_w6_4", hintAudioKey: "hint_w6_4"
    },
    {
      id: "w6_q5", worldIndex: 6, qNum: 65,
      rule: "FORMULA RULE",
      prompt: "If y is inversely proportional to x, and y = 18 when x = 4, write the formula connecting y and x.",
      audioText: "If y is inversely proportional to x, and y equals 18 when x equals 4, write the formula connecting y and x.",
      options: ["y = 72/x", "y = 4.5x", "y = x + 14", "y = 72x"],
      correctIndex: 0,
      hint: "Find k by multiplying 4 times 18 to get 72. The formula is y = 72/x.",
      hintAudioText: "Find k by multiplying 4 times 18 to get 72. The formula is y equals 72 divided by x.",
      explanation: "k = 4 × 18 = 72, so y = 72/x.",
      visual: { kind: 'eq', text: 'y = k ÷ x' },
      audioKey: "q_w6_5", hintAudioKey: "hint_w6_5"
    },
    {
      id: "w6_q6", worldIndex: 6, qNum: 66,
      rule: "SCALE RULE",
      prompt: "In the relation xy = k, when x = 7, y = 12. What is y when x = 14?",
      audioText: "In the relation x times y equals k, when x equals 7, y equals 12. What is y when x equals 14?",
      options: ["y = 6", "y = 24", "y = 8", "y = 4"],
      correctIndex: 0,
      hint: "Notice x has doubled from 7 to 14, so y must be halved from 12 to 6.",
      hintAudioText: "Notice x has doubled from 7 to 14, so y must be halved from 12 to 6.",
      explanation: "k = 7 × 12 = 84. y = 84 ÷ 14 = 6.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[7, 12], [14, '?']] },
      audioKey: "q_w6_6", hintAudioKey: "hint_w6_6"
    },
    {
      id: "w6_q7", worldIndex: 6, qNum: 67,
      rule: "SCALE RULE",
      prompt: "If y is inversely proportional to x, and x is divided by 5, what happens to y?",
      audioText: "If y is inversely proportional to x, and x is divided by 5, what happens to y?",
      options: ["y is multiplied by 5", "y is divided by 5", "y stays same", "y increases by 5"],
      correctIndex: 0,
      hint: "Dividing one variable means multiplying the other by the same amount to keep their product constant.",
      hintAudioText: "Dividing one variable means multiplying the other by the same amount to keep their product constant.",
      explanation: "Since xy = k, dividing x by 5 requires multiplying y by 5.",
      visual: { kind: 'eq', text: 'x ÷ 5 → y × 5' },
      audioKey: "q_w6_7", hintAudioKey: "hint_w6_7"
    },
    {
      id: "w6_q8", worldIndex: 6, qNum: 68,
      rule: "FORMULA RULE",
      prompt: "Given y = 144/x, find x when y = 12.",
      audioText: "Given y equals 144 divided by x, find x when y equals 12.",
      options: ["x = 12", "x = 1728", "x = 10", "x = 14"],
      correctIndex: 0,
      hint: "Divide 144 by 12.",
      hintAudioText: "Divide 144 by 12.",
      explanation: "x = 144 ÷ 12 = 12.",
      visual: { kind: 'eq', text: 'x = 144 ÷ 12' },
      audioKey: "q_w6_8", hintAudioKey: "hint_w6_8"
    },
    {
      id: "w6_q9", worldIndex: 6, qNum: 69,
      rule: "FORMULA RULE",
      prompt: "When x = 8, y = 15 in an inverse proportion. Find y when x = 24.",
      audioText: "When x equals 8, y equals 15 in an inverse proportion. Find y when x equals 24.",
      options: ["y = 5", "y = 45", "y = 6", "y = 4"],
      correctIndex: 0,
      hint: "k is 8 times 15 equals 120. Divide 120 by 24.",
      hintAudioText: "k is 8 times 15 equals 120. Divide 120 by 24.",
      explanation: "k = 8 × 15 = 120. y = 120 ÷ 24 = 5.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[8, 15], [24, '?']] },
      audioKey: "q_w6_9", hintAudioKey: "hint_w6_9"
    },
    {
      id: "w6_q10", worldIndex: 6, qNum: 70,
      rule: "FORMULA RULE",
      prompt: "If xy = 210, what is the value of y when x = 14?",
      audioText: "If x times y equals 210, what is the value of y when x equals 14?",
      options: ["y = 15", "y = 2940", "y = 14", "y = 18"],
      correctIndex: 0,
      hint: "Divide 210 by 14.",
      hintAudioText: "Divide 210 by 14.",
      explanation: "y = 210 ÷ 14 = 15.",
      visual: { kind: 'eq', text: '14 × y = 210' },
      audioKey: "q_w6_10", hintAudioKey: "hint_w6_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 7: Graph Galaxy (Q71–80) · Difficulty: 4
  // -------------------------------------------------------------------------
  [
    {
      id: "w7_q1", worldIndex: 7, qNum: 71,
      rule: "GRAPH RULE",
      prompt: "A hyperbola curve represents y = k/x and passes through (3, 20). What is y when x = 12?",
      audioText: "A hyperbola curve represents y equals k divided by x and passes through the point 3 comma 20. What is y when x equals 12?",
      options: ["y = 5", "y = 80", "y = 4", "y = 6"],
      correctIndex: 0,
      hint: "Multiply 3 times 20 to find k = 60. Then find y by dividing 60 by 12.",
      hintAudioText: "Multiply 3 times 20 to find k equals 60. Then find y by dividing 60 by 12.",
      explanation: "k = 3 × 20 = 60. y = 60 ÷ 12 = 5.",
      visual: { kind: 'graph', k: 60, point: [3, 20], ask: 12 },
      audioKey: "q_w7_1", hintAudioKey: "hint_w7_1"
    },
    {
      id: "w7_q2", worldIndex: 7, qNum: 72,
      rule: "GRAPH RULE",
      prompt: "The graph of an inverse proportion curve passes through (4, 18). Which other point lies on this curve?",
      audioText: "The graph of an inverse proportion curve passes through the point 4 comma 18. Which other point lies on this curve?",
      options: ["(6, 12)", "(6, 27)", "(5, 17)", "(8, 8)"],
      correctIndex: 0,
      hint: "4 times 18 is 72. Check which option has coordinates that multiply to 72: 6 times 12 is 72.",
      hintAudioText: "4 times 18 is 72. Check which option has coordinates that multiply to 72: 6 times 12 is 72.",
      explanation: "In (6, 12), 6 × 12 = 72.",
      visual: { kind: 'graph', k: 72, point: [4, 18], ask: 6 },
      audioKey: "q_w7_2", hintAudioKey: "hint_w7_2"
    },
    {
      id: "w7_q3", worldIndex: 7, qNum: 73,
      rule: "SPOT IT RULE",
      prompt: "What is the name of the curve formed by graphing y = k/x?",
      audioText: "What is the name of the curve formed by graphing y equals k divided by x?",
      options: ["Hyperbola", "Parabola", "Straight line", "Circle"],
      correctIndex: 0,
      hint: "It is a smooth curve that approaches both axes without touching them, called a hyperbola.",
      hintAudioText: "It is a smooth curve that approaches both axes without touching them, called a hyperbola.",
      explanation: "The graph of an inverse proportion is a hyperbola.",
      visual: { kind: 'eq', text: 'y = k ÷ x  →  Hyperbola' },
      audioKey: "q_w7_3", hintAudioKey: "hint_w7_3"
    },
    {
      id: "w7_q4", worldIndex: 7, qNum: 74,
      rule: "GRAPH RULE",
      prompt: "On the graph of y = 48/x, what is the y-coordinate when x = 8?",
      audioText: "On the graph of y equals 48 divided by x, what is the y-coordinate when x equals 8?",
      options: ["y = 6", "y = 384", "y = 8", "y = 4"],
      correctIndex: 0,
      hint: "Divide 48 by 8.",
      hintAudioText: "Divide 48 by 8.",
      explanation: "y = 48 ÷ 8 = 6.",
      visual: { kind: 'graph', k: 48, point: [8, 6], ask: 8 },
      audioKey: "q_w7_4", hintAudioKey: "hint_w7_4"
    },
    {
      id: "w7_q5", worldIndex: 7, qNum: 75,
      rule: "GRAPH RULE",
      prompt: "A curve passes through (2, 36) and (x, 9). What is x?",
      audioText: "A curve passes through the points 2 comma 36 and x comma 9. What is x?",
      options: ["x = 8", "x = 4", "x = 18", "x = 12"],
      correctIndex: 0,
      hint: "The constant product is 2 times 36 equals 72. Divide 72 by 9 to get x.",
      hintAudioText: "The constant product is 2 times 36 equals 72. Divide 72 by 9 to get x.",
      explanation: "k = 2 × 36 = 72. x = 72 ÷ 9 = 8.",
      visual: { kind: 'graph', k: 72, point: [2, 36], ask: 8 },
      audioKey: "q_w7_5", hintAudioKey: "hint_w7_5"
    },
    {
      id: "w7_q6", worldIndex: 7, qNum: 76,
      rule: "GRAPH RULE",
      prompt: "As x gets very large in the graph of y = 12/x, what value does y approach?",
      audioText: "As x gets very large in the graph of y equals 12 divided by x, what value does y approach?",
      options: ["0", "12", "1", "Infinity"],
      correctIndex: 0,
      hint: "Dividing 12 by an increasingly large number makes y get closer and closer to zero.",
      hintAudioText: "Dividing 12 by an increasingly large number makes y get closer and closer to zero.",
      explanation: "As x → ∞, y = 12/x → 0.",
      visual: { kind: 'eq', text: 'x → ∞  ⇒  y → 0' },
      audioKey: "q_w7_6", hintAudioKey: "hint_w7_6"
    },
    {
      id: "w7_q7", worldIndex: 7, qNum: 77,
      rule: "GRAPH RULE",
      prompt: "A curve passes through (5, 16). Find the y-coordinate when x = 10.",
      audioText: "A curve passes through the point 5 comma 16. Find the y-coordinate when x equals 10.",
      options: ["y = 8", "y = 32", "y = 6", "y = 10"],
      correctIndex: 0,
      hint: "k is 5 times 16 equals 80. Divide 80 by 10.",
      hintAudioText: "k is 5 times 16 equals 80. Divide 80 by 10.",
      explanation: "k = 5 × 16 = 80. y = 80 ÷ 10 = 8.",
      visual: { kind: 'graph', k: 80, point: [5, 16], ask: 10 },
      audioKey: "q_w7_7", hintAudioKey: "hint_w7_7"
    },
    {
      id: "w7_q8", worldIndex: 7, qNum: 78,
      rule: "GRAPH RULE",
      prompt: "Does the graph of inverse proportion y = k/x ever touch the x-axis?",
      audioText: "Does the graph of inverse proportion y equals k divided by x ever touch the x-axis?",
      options: ["No, it never touches the axes", "Yes, at (0, 0)", "Yes, when x is large", "Yes, at (1, 0)"],
      correctIndex: 0,
      hint: "Since k is not zero, y can never equal zero, so the curve gets closer and closer but never touches the axes.",
      hintAudioText: "Since k is not zero, y can never equal zero, so the curve gets closer and closer but never touches the axes.",
      explanation: "The hyperbola approaches the axes as asymptotes but never touches them.",
      visual: { kind: 'eq', text: 'Asymptotes at x = 0 and y = 0' },
      audioKey: "q_w7_8", hintAudioKey: "hint_w7_8"
    },
    {
      id: "w7_q9", worldIndex: 7, qNum: 79,
      rule: "GRAPH RULE",
      prompt: "A hyperbola passes through (3, 32). What is y when x = 8?",
      audioText: "A hyperbola passes through the point 3 comma 32. What is y when x equals 8?",
      options: ["y = 12", "y = 85.3", "y = 8", "y = 16"],
      correctIndex: 0,
      hint: "The constant product is 3 times 32 equals 96. Divide 96 by 8.",
      hintAudioText: "The constant product is 3 times 32 equals 96. Divide 96 by 8.",
      explanation: "k = 3 × 32 = 96. y = 96 ÷ 8 = 12.",
      visual: { kind: 'graph', k: 96, point: [3, 32], ask: 8 },
      audioKey: "q_w7_9", hintAudioKey: "hint_w7_9"
    },
    {
      id: "w7_q10", worldIndex: 7, qNum: 80,
      rule: "GRAPH RULE",
      prompt: "Which pair of coordinates belongs to the graph of y = 180/x?",
      audioText: "Which pair of coordinates belongs to the graph of y equals 180 divided by x?",
      options: ["(9, 20)", "(9, 1620)", "(10, 15)", "(8, 20)"],
      correctIndex: 0,
      hint: "Multiply the coordinates together: 9 times 20 equals 180.",
      hintAudioText: "Multiply the coordinates together: 9 times 20 equals 180.",
      explanation: "9 × 20 = 180, so (9, 20) lies on y = 180/x.",
      visual: { kind: 'eq', text: '9 × 20 = 180' },
      audioKey: "q_w7_10", hintAudioKey: "hint_w7_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 8: Construction Crew (Q81–90) · Difficulty: 4
  // -------------------------------------------------------------------------
  [
    {
      id: "w8_q1", worldIndex: 8, qNum: 81,
      rule: "WORK RULE",
      prompt: "6 excavators can dig a canal in 15 days. How many excavators are needed to dig it in 10 days?",
      audioText: "6 excavators can dig a canal in 15 days. How many excavators are needed to dig it in 10 days?",
      options: ["9 excavators", "4 excavators", "8 excavators", "12 excavators"],
      correctIndex: 0,
      hint: "Total work is 6 times 15 equals 90 machine-days. Divide 90 by 10 days.",
      hintAudioText: "Total work is 6 times 15 equals 90 machine-days. Divide 90 by 10 days.",
      explanation: "Total = 6 × 15 = 90 machine-days. 90 ÷ 10 = 9 excavators.",
      visual: { kind: 'table', xLabel: 'Excavators', yLabel: 'Days', rows: [[6, 15], ['?', 10]] },
      audioKey: "q_w8_1", hintAudioKey: "hint_w8_1"
    },
    {
      id: "w8_q2", worldIndex: 8, qNum: 82,
      rule: "WORK RULE",
      prompt: "10 builders take 18 days to construct a bridge foundation. How many days would 15 builders take?",
      audioText: "10 builders take 18 days to construct a bridge foundation. How many days would 15 builders take?",
      options: ["12 days", "27 days", "10 days", "14 days"],
      correctIndex: 0,
      hint: "10 times 18 is 180 builder-days. Divide 180 by 15 builders.",
      hintAudioText: "10 times 18 is 180 builder-days. Divide 180 by 15 builders.",
      explanation: "Total = 10 × 18 = 180 builder-days. 180 ÷ 15 = 12 days.",
      visual: { kind: 'table', xLabel: 'Builders', yLabel: 'Days', rows: [[10, 18], [15, '?']] },
      audioKey: "q_w8_2", hintAudioKey: "hint_w8_2"
    },
    {
      id: "w8_q3", worldIndex: 8, qNum: 83,
      rule: "WORK RULE",
      prompt: "12 crane trucks can unload a cargo ship in 8 hours. How many hours would 16 crane trucks take?",
      audioText: "12 crane trucks can unload a cargo ship in 8 hours. How many hours would 16 crane trucks take?",
      options: ["6 hours", "10.67 hours", "4 hours", "8 hours"],
      correctIndex: 0,
      hint: "12 times 8 is 96 crane-hours. Divide 96 by 16 crane trucks.",
      hintAudioText: "12 times 8 is 96 crane-hours. Divide 96 by 16 crane trucks.",
      explanation: "Total = 12 × 8 = 96 crane-hours. 96 ÷ 16 = 6 hours.",
      visual: { kind: 'table', xLabel: 'Cranes', yLabel: 'Hours', rows: [[12, 8], [16, '?']] },
      audioKey: "q_w8_3", hintAudioKey: "hint_w8_3"
    },
    {
      id: "w8_q4", worldIndex: 8, qNum: 84,
      rule: "WORK RULE",
      prompt: "A road crew of 8 workers paves a road in 21 days. If 6 more workers join, making 14 workers, how many days will it take?",
      audioText: "A road crew of 8 workers paves a road in 21 days. If 6 more workers join, making 14 workers, how many days will it take?",
      options: ["12 days", "36.75 days", "15 days", "10 days"],
      correctIndex: 0,
      hint: "Total work is 8 times 21 equals 168 worker-days. Divide 168 by 14 workers.",
      hintAudioText: "Total work is 8 times 21 equals 168 worker-days. Divide 168 by 14 workers.",
      explanation: "Total = 8 × 21 = 168 worker-days. 168 ÷ 14 = 12 days.",
      visual: { kind: 'table', xLabel: 'Workers', yLabel: 'Days', rows: [[8, 21], [14, '?']] },
      audioKey: "q_w8_4", hintAudioKey: "hint_w8_4"
    },
    {
      id: "w8_q5", worldIndex: 8, qNum: 85,
      rule: "WORK RULE",
      prompt: "4 bulldozers clear a site in 30 hours. How many bulldozers are needed to clear the site in 20 hours?",
      audioText: "4 bulldozers clear a site in 30 hours. How many bulldozers are needed to clear the site in 20 hours?",
      options: ["6 bulldozers", "3 bulldozers", "5 bulldozers", "8 bulldozers"],
      correctIndex: 0,
      hint: "4 times 30 is 120 bulldozer-hours. Divide 120 by 20 hours.",
      hintAudioText: "4 times 30 is 120 bulldozer-hours. Divide 120 by 20 hours.",
      explanation: "Total = 4 × 30 = 120 bulldozer-hours. 120 ÷ 20 = 6 bulldozers.",
      visual: { kind: 'table', xLabel: 'Bulldozers', yLabel: 'Hours', rows: [[4, 30], ['?', 20]] },
      audioKey: "q_w8_5", hintAudioKey: "hint_w8_5"
    },
    {
      id: "w8_q6", worldIndex: 8, qNum: 86,
      rule: "WORK RULE",
      prompt: "15 carpenters take 16 days to frame a hall. How many days would 20 carpenters take?",
      audioText: "15 carpenters take 16 days to frame a hall. How many days would 20 carpenters take?",
      options: ["12 days", "21.3 days", "10 days", "14 days"],
      correctIndex: 0,
      hint: "Total work is 15 times 16 equals 240 carpenter-days. Divide 240 by 20 carpenters.",
      hintAudioText: "Total work is 15 times 16 equals 240 carpenter-days. Divide 240 by 20 carpenters.",
      explanation: "Total = 15 × 16 = 240 carpenter-days. 240 ÷ 20 = 12 days.",
      visual: { kind: 'table', xLabel: 'Carpenters', yLabel: 'Days', rows: [[15, 16], [20, '?']] },
      audioKey: "q_w8_6", hintAudioKey: "hint_w8_6"
    },
    {
      id: "w8_q7", worldIndex: 8, qNum: 87,
      rule: "WORK RULE",
      prompt: "9 cement mixers take 8 hours to pour a foundation. If only 6 mixers are available, how many hours will it take?",
      audioText: "9 cement mixers take 8 hours to pour a foundation. If only 6 mixers are available, how many hours will it take?",
      options: ["12 hours", "5.33 hours", "10 hours", "14 hours"],
      correctIndex: 0,
      hint: "9 times 8 is 72 mixer-hours. Divide 72 by 6 mixers.",
      hintAudioText: "9 times 8 is 72 mixer-hours. Divide 72 by 6 mixers.",
      explanation: "Total = 9 × 8 = 72 mixer-hours. 72 ÷ 6 = 12 hours.",
      visual: { kind: 'table', xLabel: 'Mixers', yLabel: 'Hours', rows: [[9, 8], [6, '?']] },
      audioKey: "q_w8_7", hintAudioKey: "hint_w8_7"
    },
    {
      id: "w8_q8", worldIndex: 8, qNum: 88,
      rule: "WORK RULE",
      prompt: "18 masons build a stone wall in 10 days. How many masons are needed to build it in 15 days?",
      audioText: "18 masons build a stone wall in 10 days. How many masons are needed to build it in 15 days?",
      options: ["12 masons", "27 masons", "15 masons", "10 masons"],
      correctIndex: 0,
      hint: "18 times 10 is 180 mason-days. Divide 180 by 15 days.",
      hintAudioText: "18 times 10 is 180 mason-days. Divide 180 by 15 days.",
      explanation: "Total = 18 × 10 = 180 mason-days. 180 ÷ 15 = 12 masons.",
      visual: { kind: 'table', xLabel: 'Masons', yLabel: 'Days', rows: [[18, 10], ['?', 15]] },
      audioKey: "q_w8_8", hintAudioKey: "hint_w8_8"
    },
    {
      id: "w8_q9", worldIndex: 8, qNum: 89,
      rule: "WORK RULE",
      prompt: "5 scaffolding teams erect scaffolds in 24 days. How many days would 8 teams take?",
      audioText: "5 scaffolding teams erect scaffolds in 24 days. How many days would 8 teams take?",
      options: ["15 days", "38.4 days", "12 days", "18 days"],
      correctIndex: 0,
      hint: "5 times 24 equals 120 team-days. Divide 120 by 8 teams.",
      hintAudioText: "5 times 24 equals 120 team-days. Divide 120 by 8 teams.",
      explanation: "Total = 5 × 24 = 120 team-days. 120 ÷ 8 = 15 days.",
      visual: { kind: 'table', xLabel: 'Teams', yLabel: 'Days', rows: [[5, 24], [8, '?']] },
      audioKey: "q_w8_9", hintAudioKey: "hint_w8_9"
    },
    {
      id: "w8_q10", worldIndex: 8, qNum: 90,
      rule: "WORK RULE",
      prompt: "16 earthmovers move soil in 15 days. How many earthmovers are needed to complete the work in 12 days?",
      audioText: "16 earthmovers move soil in 15 days. How many earthmovers are needed to complete the work in 12 days?",
      options: ["20 earthmovers", "13 earthmovers", "18 earthmovers", "24 earthmovers"],
      correctIndex: 0,
      hint: "16 times 15 is 240 earthmover-days. Divide 240 by 12 days.",
      hintAudioText: "16 times 15 is 240 earthmover-days. Divide 240 by 12 days.",
      explanation: "Total = 16 × 15 = 240 earthmover-days. 240 ÷ 12 = 20 earthmovers.",
      visual: { kind: 'table', xLabel: 'Earthmovers', yLabel: 'Days', rows: [[16, 15], ['?', 12]] },
      audioKey: "q_w8_10", hintAudioKey: "hint_w8_10"
    }
  ],

  // -------------------------------------------------------------------------
  // WORLD 9: Proportion HQ (Q91–100) · Difficulty: 4
  // -------------------------------------------------------------------------
  [
    {
      id: "w9_q1", worldIndex: 9, qNum: 91,
      rule: "SCALE RULE",
      prompt: "Two variables x and y are inversely proportional. When x doubles, what happens to y?",
      audioText: "Two variables x and y are inversely proportional. When x doubles, what happens to y?",
      options: ["y decreases by 50%", "y increases by 100%", "y decreases by 100%", "y stays same"],
      correctIndex: 0,
      hint: "Doubling x means multiplying by 2, so y is divided by 2, which is a 50 percent decrease.",
      hintAudioText: "Doubling x means multiplying by 2, so y is divided by 2, which is a 50 percent decrease.",
      explanation: "y becomes 1/2 of its original value, which is a 50% decrease.",
      visual: { kind: 'eq', text: 'x × 2 → y ÷ 2 (50% drop)' },
      audioKey: "q_w9_1", hintAudioKey: "hint_w9_1"
    },
    {
      id: "w9_q2", worldIndex: 9, qNum: 92,
      rule: "WORK RULE",
      prompt: "12 printing presses print an edition of books in 14 hours. How many hours would 21 presses take?",
      audioText: "12 printing presses print an edition of books in 14 hours. How many hours would 21 presses take?",
      options: ["8 hours", "24.5 hours", "6 hours", "10 hours"],
      correctIndex: 0,
      hint: "12 times 14 is 168 press-hours. Divide 168 by 21 presses.",
      hintAudioText: "12 times 14 is 168 press-hours. Divide 168 by 21 presses.",
      explanation: "Total = 12 × 14 = 168 press-hours. 168 ÷ 21 = 8 hours.",
      visual: { kind: 'table', xLabel: 'Presses', yLabel: 'Hours', rows: [[12, 14], [21, '?']] },
      audioKey: "q_w9_2", hintAudioKey: "hint_w9_2"
    },
    {
      id: "w9_q3", worldIndex: 9, qNum: 93,
      rule: "GRAPH RULE",
      prompt: "The curve xy = 360 passes through (a, 15) and (18, b). Find the value of a + b.",
      audioText: "The curve x times y equals 360 passes through the points a comma 15 and 18 comma b. Find the value of a plus b.",
      options: ["44", "38", "50", "42"],
      correctIndex: 0,
      hint: "a = 360 divided by 15 = 24. b = 360 divided by 18 = 20. Then add 24 plus 20.",
      hintAudioText: "a equals 360 divided by 15 which is 24. b equals 360 divided by 18 which is 20. Then add 24 plus 20.",
      explanation: "a = 360 ÷ 15 = 24. b = 360 ÷ 18 = 20. a + b = 24 + 20 = 44.",
      visual: { kind: 'eq', text: 'a = 24, b = 20  ⇒  a + b = 44' },
      audioKey: "q_w9_3", hintAudioKey: "hint_w9_3"
    },
    {
      id: "w9_q4", worldIndex: 9, qNum: 94,
      rule: "SPEED RULE",
      prompt: "A gear with 30 teeth meshes with a gear with 10 teeth. If the 30-tooth gear rotates at 40 RPM, what is the speed of the 10-tooth gear?",
      audioText: "A gear with 30 teeth meshes with a gear with 10 teeth. If the 30-tooth gear rotates at 40 revolutions per minute, what is the speed of the 10-tooth gear?",
      options: ["120 RPM", "13.3 RPM", "80 RPM", "100 RPM"],
      correctIndex: 0,
      hint: "Tooth count and rotation speed are inversely proportional! 30 times 40 is 1200. Divide 1200 by 10.",
      hintAudioText: "Tooth count and rotation speed are inversely proportional! 30 times 40 is 1200. Divide 1200 by 10.",
      explanation: "Constant = 30 × 40 = 1200. 1200 ÷ 10 = 120 RPM.",
      visual: { kind: 'table', xLabel: 'Teeth', yLabel: 'RPM', rows: [[30, 40], [10, '?']] },
      audioKey: "q_w9_4", hintAudioKey: "hint_w9_4"
    },
    {
      id: "w9_q5", worldIndex: 9, qNum: 95,
      rule: "WORK RULE",
      prompt: "14 seamstresses make 700 costumes in 18 days. How many days would 21 seamstresses take for the same 700 costumes?",
      audioText: "14 seamstresses make 700 costumes in 18 days. How many days would 21 seamstresses take for the same 700 costumes?",
      options: ["12 days", "27 days", "14 days", "10 days"],
      correctIndex: 0,
      hint: "14 times 18 is 252 seamstress-days. Divide 252 by 21 seamstresses.",
      hintAudioText: "14 times 18 is 252 seamstress-days. Divide 252 by 21 seamstresses.",
      explanation: "Total = 14 × 18 = 252 seamstress-days. 252 ÷ 21 = 12 days.",
      visual: { kind: 'table', xLabel: 'Seamstresses', yLabel: 'Days', rows: [[14, 18], [21, '?']] },
      audioKey: "q_w9_5", hintAudioKey: "hint_w9_5"
    },
    {
      id: "w9_q6", worldIndex: 9, qNum: 96,
      rule: "FORMULA RULE",
      prompt: "If y is inversely proportional to x, and y = 25 when x = 8, what is y when x = 20?",
      audioText: "If y is inversely proportional to x, and y equals 25 when x equals 8, what is y when x equals 20?",
      options: ["y = 10", "y = 62.5", "y = 12", "y = 8"],
      correctIndex: 0,
      hint: "Constant product k is 8 times 25 equals 200. Divide 200 by 20.",
      hintAudioText: "Constant product k is 8 times 25 equals 200. Divide 200 by 20.",
      explanation: "k = 8 × 25 = 200. y = 200 ÷ 20 = 10.",
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[8, 25], [20, '?']] },
      audioKey: "q_w9_6", hintAudioKey: "hint_w9_6"
    },
    {
      id: "w9_q7", worldIndex: 9, qNum: 97,
      rule: "WORK RULE",
      prompt: "A water main is filled by 9 pumps in 16 hours. How many MORE pumps must be added to fill it in 12 hours?",
      audioText: "A water main is filled by 9 pumps in 16 hours. How many MORE pumps must be added to fill it in 12 hours?",
      options: ["3 more pumps", "12 more pumps", "4 more pumps", "6 more pumps"],
      correctIndex: 0,
      hint: "9 times 16 equals 144 pump-hours. 144 divided by 12 equals 12 pumps needed in total. 12 minus 9 is 3 more pumps.",
      hintAudioText: "9 times 16 equals 144 pump-hours. 144 divided by 12 equals 12 pumps needed in total. 12 minus 9 is 3 more pumps.",
      explanation: "Total = 9 × 16 = 144. Needed = 144 ÷ 12 = 12 pumps. Added = 12 − 9 = 3.",
      visual: { kind: 'table', xLabel: 'Pumps', yLabel: 'Hours', rows: [[9, 16], ['Total: 12', 12]] },
      audioKey: "q_w9_7", hintAudioKey: "hint_w9_7"
    },
    {
      id: "w9_q8", worldIndex: 9, qNum: 98,
      rule: "PRODUCT RULE",
      prompt: "In a circuit with constant voltage, when resistance is 12 ohms, current is 15 amps. What is current when resistance is 20 ohms?",
      audioText: "In a circuit with constant voltage, when resistance is 12 ohms, current is 15 amps. What is current when resistance is 20 ohms?",
      options: ["9 amps", "25 amps", "10 amps", "12 amps"],
      correctIndex: 0,
      hint: "Ohm's law with fixed voltage means current and resistance multiply to constant voltage: 12 times 15 is 180. Divide 180 by 20.",
      hintAudioText: "Ohm's law with fixed voltage means current and resistance multiply to constant voltage: 12 times 15 is 180. Divide 180 by 20.",
      explanation: "Voltage = 12 × 15 = 180. Current = 180 ÷ 20 = 9 amps.",
      visual: { kind: 'table', xLabel: 'Resistance (Ω)', yLabel: 'Current (A)', rows: [[12, 15], [20, '?']] },
      audioKey: "q_w9_8", hintAudioKey: "hint_w9_8"
    },
    {
      id: "w9_q9", worldIndex: 9, qNum: 99,
      rule: "WORK RULE",
      prompt: "16 combine harvesters reap a wheat field in 9 days. How many harvesters are required to reap it in 6 days?",
      audioText: "16 combine harvesters reap a wheat field in 9 days. How many harvesters are required to reap it in 6 days?",
      options: ["24 harvesters", "11 harvesters", "20 harvesters", "18 harvesters"],
      correctIndex: 0,
      hint: "16 times 9 is 144 harvester-days. Divide 144 by 6 days.",
      hintAudioText: "16 times 9 is 144 harvester-days. Divide 144 by 6 days.",
      explanation: "Total = 16 × 9 = 144 harvester-days. 144 ÷ 6 = 24 harvesters.",
      visual: { kind: 'table', xLabel: 'Harvesters', yLabel: 'Days', rows: [[16, 9], ['?', 6]] },
      audioKey: "q_w9_9", hintAudioKey: "hint_w9_9"
    },
    {
      id: "w9_q10", worldIndex: 9, qNum: 100,
      rule: "SPOT IT RULE",
      prompt: "Master Rule: Which statement is true for all inverse proportions where y = k/x and k is positive?",
      audioText: "Master Rule: Which statement is true for all inverse proportions where y equals k divided by x and k is positive?",
      options: ["Their product xy is constant", "Their ratio y/x is constant", "Both variables increase together", "Their difference is constant"],
      correctIndex: 0,
      hint: "The defining property of inverse proportion is a constant product: x times y stays the same.",
      hintAudioText: "The defining property of inverse proportion is a constant product: x times y stays the same.",
      explanation: "By definition, inverse proportion means xy = k (a constant product).",
      visual: { kind: 'eq', text: 'xy = k (constant product)' },
      audioKey: "q_w9_10", hintAudioKey: "hint_w9_10"
    }
  ]
];

export function getQuestion(worldIndex = 0, qIndex = 0) {
  const worldList = PRACTICE_QUESTIONS[worldIndex] || PRACTICE_QUESTIONS[0];
  const q = worldList[qIndex % worldList.length];
  return { ...q };
}
