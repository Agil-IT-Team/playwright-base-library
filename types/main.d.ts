import playwright from "playwright";

export default main;
/**
 * Utility functions
 */
export type utilFunctions = {
  /**
   * Ask user for input
   */
  askUser: (question: string, timeout: number) => Promise<string>;
  /**
   * take a screenshot
   */
  takeScreenshot: (page: playwright.Page, prefix: string) => Promise<void>;
  /**
   * wait page to load
   */
  waitEntirePageToLoad: (
    page: playwright.Page,
    additionalWaitTimeSeconds: number
  ) => Promise<void>;
};
/**
 * Configurations to run the automation
 */
export type configurations = {
  DEMO_MODE: boolean;
};
export type processingCallback = (
  page: playwright.Page,
  utilFunctions: utilFunctions
) => Promise<void>;
/**
 * @callback processingCallback
 * @param { playwright.Page }
 * @param { utilFunctions  }
 * @returns { Promise<void> }
 */
/**
 * Run main automation
 * @param { processingCallback } processing The concrete automated tasks to run
 * @returns { Promise<void> }
 */
declare function main(processing: processingCallback): Promise<void>;
