import classNames from 'classnames';
import { decorateComponentWithProps, isiOS } from 'wix-rich-content-common';
import createStaticToolbar from './createStaticToolbar';
import { AddPluginButton } from '../buttons';
import { getTextButtonsFromList } from '../buttons/utils';
import toolbarStyles from '../../../../statics/styles/mobile-toolbar.scss';
import buttonStyles from '../../../../statics/styles/mobile-toolbar-button.scss';
import separatorStyles from '../../../../statics/styles/mobile-toolbar-separator.scss';

const createMobileToolbar = ({
  buttons,
  textPluginButtons,
  pluginButtons,
  helpers,
  pubsub,
  getEditorState,
  setEditorState,
  anchorTarget,
  relValue,
  theme,
  t,
  offset,
  visibilityFn,
  uiSettings,
  displayOptions,
  toolbarDecorationFn,
  config,
}) => {
  const mobileTheme = getMobileTheme(theme);
  return createStaticToolbar({
    helpers,
    t,
    name: 'MobileToolbar',
    theme: mobileTheme,
    structure: getMobileButtons({
      buttons,
      textPluginButtons,
      pluginButtons,
      helpers,
      pubsub,
      getEditorState,
      setEditorState,
      mobileTheme,
      t,
      uiSettings,
      config,
    }),
    anchorTarget,
    relValue,
    isMobile: true,
    offset,
    visibilityFn,
    uiSettings,
    displayOptions,
    toolbarDecorationFn,
  });
};

const getMobileTheme = theme => {
  const {
    toolbarStyles: toolbarTheme,
    buttonStyles: buttonTheme,
    separatorStyles: separatorTheme,
    ...rest
  } = theme || {};

  return {
    toolbarStyles: {
      toolbar: classNames(toolbarStyles.mobileToolbar, toolbarTheme && toolbarTheme.mobileToolbar, {
        [toolbarStyles.mobileToolbar_fixed]: !isiOS(),
        [toolbarTheme.mobileToolbar_fixed]:
          toolbarTheme && toolbarTheme.mobileToolbar_fixed && !isiOS(),
      }),
      scrollableContainer: classNames(
        toolbarStyles.mobileToolbar_scrollableContainer,
        toolbarTheme && toolbarTheme.mobileToolbar_scrollableContainer
      ),
      buttons: classNames(
        toolbarStyles.mobileToolbar_buttons,
        toolbarTheme && toolbarTheme.mobileToolbar_buttons
      ),
      extend: classNames(
        toolbarStyles.mobileToolbar_extend,
        toolbarTheme && toolbarTheme.mobileToolbar_extend
      ),
      responsiveSpacer: toolbarStyles.mobileToolbar_responsiveSpacer,
      responsiveArrow: classNames(
        toolbarStyles.mobileToolbar_responsiveArrow,
        toolbarTheme && toolbarTheme.mobileToolbar_responsiveArrow
      ),
      responsiveArrowStart: classNames(
        toolbarStyles.mobileToolbar_responsiveArrowStart,
        toolbarTheme && toolbarTheme.mobileToolbar_responsiveArrowStart
      ),
      responsiveArrowEnd: classNames(
        toolbarStyles.mobileToolbar_responsiveArrowEnd,
        toolbarTheme && toolbarTheme.mobileToolbar_responsiveArrowEnd
      ),
      //eslint-disable-next-line camelcase
      responsiveArrowStart_icon: classNames(
        toolbarStyles.mobileToolbar_responsiveArrowStart_icon,
        toolbarTheme && toolbarTheme.mobileToolbar_responsiveArrowStart_icon
      ),
      //eslint-disable-next-line camelcase
      responsiveArrowEnd_icon: classNames(
        toolbarStyles.mobileToolbar_responsiveArrowEnd_icon,
        toolbarTheme && toolbarTheme.mobileToolbar_responsiveArrowEnd_icon
      ),
    },
    buttonStyles: {
      //eslint-disable-next-line camelcase
      inlineToolbarButton_wrapper: classNames(
        buttonStyles.mobileToolbarButton_wrapper,
        buttonTheme && buttonTheme.mobileToolbarButton_wrapper
      ),
      inlineToolbarButton: classNames(
        buttonStyles.mobileToolbarButton,
        buttonTheme && buttonTheme.mobileToolbarButton
      ),
      //eslint-disable-next-line camelcase
      inlineToolbarButton_icon: classNames(
        buttonStyles.mobileToolbarButton_icon,
        buttonTheme && buttonTheme.mobileToolbarButton_icon
      ),
    },
    separatorStyles: {
      separator: classNames(
        separatorStyles.mobileToolbarSeparator,
        separatorTheme && separatorTheme.mobileToolbarSeparator
      ),
    },
    ...rest,
  };
};

const getMobileButtons = ({
  buttons,
  textPluginButtons,
  pluginButtons,
  helpers,
  pubsub,
  getEditorState,
  setEditorState,
  mobileTheme,
  t,
  uiSettings,
  config,
}) => {
  const addPluginIndex = buttons.findIndex(b => b === 'AddPlugin');
  if (addPluginIndex !== -1) {
    buttons.splice(addPluginIndex, 1);
  }

  const structure = getTextButtonsFromList({
    buttons,
    textPluginButtons,
    theme: mobileTheme,
    isMobile: true,
    t,
    uiSettings,
    config,
  });

  if (addPluginIndex !== -1) {
    const addAddPluginButton = pluginButtons && pluginButtons.length;
    if (addAddPluginButton) {
      structure.splice(
        addPluginIndex,
        0,
        decorateComponentWithProps(AddPluginButton, {
          openModal: helpers.openModal,
          closeModal: helpers.closeModal,
          pluginButtons,
          getEditorState,
          setEditorState,
          pubsub,
          t,
          theme: mobileTheme,
        })
      );
    }
  }

  return structure;
};

export default createMobileToolbar;
