import { css } from "lit";

export const editorStyles = css`
  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }

  .row {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  label {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input,
  select {
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background-color: var(
      --ha-card-background,
      var(--card-background-color, #fff)
    );
    color: var(--primary-text-color);
  }
`;
