import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "./@types";

const GlobalStyle = createGlobalStyle`
    /* BODY */
    body {
      background: ${({ theme }) => theme.colors.background.primary};
      /* background-image:  ${({ theme }) =>
        `url(${theme.backgroundImage.sum})`}; */
      color: ${({ theme }) => theme.colors.text.primary};
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      /* font-weight: 700 ; */
      /* font-style: normal !important;
      overflow: hidden;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
       backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
      height: 100vh;
      width: 100vw; */
    }

    * {
      -webkit-touch-callout: none !important; /* iOS Safari */
      -webkit-user-select: none !important; /* Safari */
      -khtml-user-select: none !important; /* Konqueror HTML */
      -moz-user-select: none !important; /* Old versions of Firefox */
      -ms-user-select: none !important; /* Internet Explorer/Edge */
      user-select: none !important; /* Non-prefixed version, currently */
      > *[contenteditable="true"]:focus {
        border: none;
        /* outline-style: groove;
        outline-width: 1px;
        outline-color: ${({ theme }) => theme.colors.border.primary}; */
        outline: none;
        background: ${({ theme }: { theme: ThemeInterface }) =>
          theme.colors.background.primary};
      }

      [data-title] {
        cursor: help;
      }

      [data-title]:hover::before {
        content: attr(data-title);
        position: absolute;
        bottom: -26px;
        display: inline-block;
        padding: 4px 8px;
        border-radius: 2px;
        background: ${({ theme }: { theme: ThemeInterface }) =>
          theme.colors.info.light};
        color: ${({ theme }: { theme: ThemeInterface }) =>
          theme.colors.info.medium};
        font-size: 12px;
        white-space: nowrap;
        z-index: 66;
      }
    }

    /*=================================================================================================
      SCROLL BAR
    =================================================================================================*/
    body ::-webkit-scrollbar-thumb {
      cursor: pointer;
      border-radius: 5px;
      -webkit-transition: color 0.2s ease;
      transition: color 0.2s ease;
      border: 0.25rem ${({ theme }) => theme.colors.background.primary} solid;
    }

    body ::-webkit-scrollbar-track {
      background: ${({ theme }: { theme: ThemeInterface }) =>
        theme.colors.background.primary};
      border: 0.3rem ${({ theme }) => theme.colors.background.primary} solid;
      border-radius: 0;
    }
    body ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0.95rem;
      height: 1rem;
    }
    body ::-webkit-scrollbar-thumb {
      background-image: linear-gradient(${({ theme }) =>
        theme.colors.background.sidebar}, ${({ theme }) =>
  theme.colors.background.sidebar});
    }
    body ::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.colors.background.primary};
    }

    /* INPUT */
  .rs-input {
    background:${({ theme }) => theme.colors.background.primary};
    border-color:${({ theme }) => theme.colors.border.primary}
  }
  .react-tel-input .form-control{
     background:${({ theme }) => theme.colors.background.primary};
    border-color:${({ theme }) => theme.colors.border.primary};
    width:100%;
    height: 3rem;
    font-size:20px;
  }

  .rs-input:disabled {
    background:${({ theme }) => theme.colors.background.cards};
  }

  .jcWlLe .containerStyle .inputStyle {
     background:${({ theme }) => theme.colors.background.primary};
    border-color:${({ theme }) => theme.colors.border.primary};
  }

  .rs-picker-default .rs-picker-toggle.rs-btn {
    background:${({ theme }) => theme.colors.background.primary} !important;
    border-color:${({ theme }) => theme.colors.border.primary} !important;
    border:none !important;
  }

  .rs-picker-input {
    border-color:${({ theme }) => theme.colors.border.primary} !important;
  }

  .rs-picker-menu {
    background:${({ theme }) => theme.colors.background.primary} !important;
    border-color:${({ theme }) => theme.colors.border.primary} !important;
  }

  .rs-input-group {
    border-color:${({ theme }) => theme.colors.border.primary} !important; 
  }

  .rs-input-group-addon {
    background:${({ theme }) => theme.colors.background.cards} !important;
  }

  /* UPLOAD */
  .rs-uploader-draggable .rs-uploader-trigger-customize .rs-uploader-trigger-btn {
    background:${({ theme }) => theme.colors.background.primary} !important;
  }
  
  /* LIST */
  .rs-list-item, .rs-list {
    background: transparent !important;
    border-color:${({ theme }) => theme.colors.border.primary} !important;
    box-shadow:none !important;
  }

  /* NAV */
  .rs-nav-item.rs-nav-item-active {
    /* background: ${({ theme }) => theme.colors.background.main} !important; */
    color: ${({ theme }) => theme.colors.background.main} !important;
    border:none !important;
  }

  .rs-nav-subtle.rs-nav-horizontal .rs-nav-bar {
    border:none !important;
  }

  .rs-nav-item,.rs-nav-tabs.rs-nav-horizontal .rs-nav-bar {
     border:none !important;
    text-align:center;
    font-size:20px;
  }

  .rs-nav-subtle .rs-nav-item.rs-nav-item-active:before {
    background:${({ theme }) => theme.colors.background.main} !important;
  }

  .rs-nav-subtle .rs-nav-item:focus, .rs-nav-subtle .rs-nav-item:hover {
    color:${({ theme }) => theme.colors.background.main} !important;
  }

  .rs-nav-justified>.rs-dropdown, .rs-nav-justified>.rs-nav-item {
    /* height:45px */
    border: none
  }

  .rs-nav-subtle.rs-nav-horizontal .rs-nav-item.rs-nav-item-active:before {
    display:none
  }

   /* EDITOR */
    .ck-reset_all :not(.ck-reset_all-excluded *), .ck.ck-reset, .ck.ck-reset_all {
      background: ${({ theme }) => theme.colors.background.cards};
      border: none;
      border-radius: 16px 16px 0 0 !important;
    }
    .ck-reset_all :not(.ck-reset_all-excluded *), .ck.ck-reset_all {
      color: ${({ theme }) => theme.colors.icon.primary} !important;
      :hover {
        color: ${({ theme }) => theme.colors.icon.active} !important;
      }
    }
    .ck.ck-icon.ck-icon_inherit-color:hover, .ck.ck-icon.ck-icon_inherit-color :hover {
      color: ${({ theme }) => theme.colors.icon.active} !important;
    }
    .ck-rounded-corners .ck.ck-button, .ck-rounded-corners a.ck.ck-button, .ck.ck-button.ck-rounded-corners, a.ck.ck-button.ck-rounded-corners {
      color: ${({ theme }) => theme.colors.icon.primary} !important;
      :hover {
        color: ${({ theme }) => theme.colors.icon.active} !important;
      }
    }
    .ck.ck-button:not(.ck-disabled):active, a.ck.ck-button:not(.ck-disabled):active {
      background: transparent !important;
      outline: none !important;
    }
    .ck.ck-icon.ck-icon_inherit-color, .ck.ck-icon.ck-icon_inherit-color * {
      color: ${({ theme }) => theme.colors.icon.primary};
      :hover {
        color: ${({ theme }) => theme.colors.icon.primary};
      }
    }
    .ck.ck-button.ck-on, a.ck.ck-button.ck-on {
      color: ${({ theme }) => theme.colors.text.primary};
      background: ${({ theme }) => theme.colors.background.mainDimmer};
      :hover {
        color: ${({ theme }) => theme.colors.text.primary} !important;
        background: ${({ theme }) => theme.colors.background.main} !important;
      }
    }
    .ck.ck-button:not(.ck-disabled):hover, a.ck.ck-button:not(.ck-disabled):hover {
      background: transparent;
    }
   .ck.ck-editor__main>.ck-editor__editable, .ck.ck-editor__editable_inline[dir=ltr] {
      background: ${({ theme }) => theme.colors.background.primary};
      border-radius: 0 0 16px 16px !important;
      min-height: 100px !important;
      width: 100% !important;
      border: none;
    }
    .ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
      border: none;
    }
    .ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
      border: none;
    }
    .ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable, .ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners {
      border: none;
    }
    .ck.ck-list__item .ck-button.ck-on {
      background: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.primary} !important;
    }
    .ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list, .ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners {
        border-radius: 8px !important;
    }
    /* .ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible {
      padding-left: 5px solid ${({ theme }) =>
        theme.colors.background.mainDimmer} !important;
    } */
    .ck.ck-list__item .ck-button:hover:not(.ck-disabled) {
      background: ${({ theme }) => theme.colors.background.primary};
      border-radius: 8px !important;
      border-color: red !important;
    }
    .ck.ck-button:active, .ck.ck-button:focus, a.ck.ck-button:active, a.ck.ck-button:focus {
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
      }
     .ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled) {
      border: none !important;
      outline: none !important;
    }
    .ck.ck-input:focus {
      border: 1px solid ${({ theme }) =>
        theme.colors.border.primary} !important;
    }
    .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label {
      background: ${({ theme }) => theme.colors.background.cards};
    }
    .ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon,
    .ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label, 
    .ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a {
      display: none !important;
    }

    /* DRAWER */
    .rs-drawer-header+.rs-drawer-body, .rs-drawer-header,.rs-drawer-body {
      background: ${({ theme }) => theme.colors.background.primary};
    }

     .rs-drawer-header {
      border-bottom-color: ${({ theme }) => theme.colors.border.primary};
    }

    .rs-divider {
      background: ${({ theme }) => theme.colors.border.primary};
    }

    .rs-panel-header {
      color: ${({ theme }) => theme.colors.text.primary};
    }

    svg {
      fill: ${({ theme }) => theme.colors.icon.primary};
    }
`;

export default GlobalStyle;
