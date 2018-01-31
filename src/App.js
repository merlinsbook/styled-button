/**
 * Demo View containingsome button examples.
 * @author [David Tolbert](npm.merlin@gmail.com)
 */

// Node Modules
import React from 'react';

// Styles
import styles from './stylesheets/index.scss';

// Components
import View from './components/View';
import { DefaultButton, PresetButton } from './components/Button';

// Demo
export default () => {
  return (
    <View>

      {/* Default Button Example */}
      <DefaultButton 
        color={'#db7093'}
        background={'transparent'}
        width={'300px'}
        height={'180px'}
        padding={'1em'}
        margin={'2em'}
      >
        Default Button
      </DefaultButton>

      {/* Preset Button Example 1 */}
      <PresetButton small>
        Preset Button
      </PresetButton>

      {/* Preset Button Example 2 */}
      <PresetButton large rounded invertColors>
        Preset Button
      </PresetButton>

    </View>
  )
}
