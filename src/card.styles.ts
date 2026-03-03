import { css } from "lit";

export const styles = css`
  ha-card {
    padding: 12px 16px 16px;
  }

  .card-header {
    font-size: 16px;
    font-weight: 500;
    color: var(--ha-card-header-color, var(--primary-text-color));
    padding: 0 0 8px;
    margin: 0;
  }

  .card-content {
    padding: 0;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 8px;
    overflow-y: auto;
  }

  .fav-button {
    background-color: var(
      --ha-card-background,
      var(--card-background-color, #fff)
    );
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    padding: 10px 8px;
    text-align: center;
    font-size: 13px;
    color: var(--primary-text-color);
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .fav-button:hover {
    background-color: var(--secondary-background-color, #f5f5f5);
  }

  .fav-button:active {
    transform: scale(0.97);
  }

  .fav-button.active {
    background-color: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color, #03a9f4);
  }

  .loading {
    color: var(--secondary-text-color, #727272);
    font-size: 14px;
    text-align: center;
    padding: 16px 0;
  }

  .error {
    color: var(--error-color, #db4437);
    font-size: 14px;
  }
`;
