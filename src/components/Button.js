/**
 * Styled Button Component. 
 * Feel free to adjust and use this example for your own projects.
 * @author [David Tolbert](npm.merlin@gmail.com)
 * @example
 * import { DefaultButton, PresetButton } from './your-path/Button';
 * @see https://www.styled-components.com/
 */

// Node Modules
import styled, { css } from 'styled-components';

/** 
 * Base Button Example
 * This is your base component.
 * @access private
 */
const BaseButton = styled.button`
  background-color: transparent;
  color: #db7093;
  font-size: 30px;
  font-family: 'Berkshire Swash', cursive;
  border: 2px solid #db7093;
 
  padding: .5em;
  margin: 1em;

  transition: background-color .5s, transform .3s ease;

  &:hover {
    background-color: rgba(255,255,255,0.2);
  }

  &:active {
    transform: perspective(1px) scale(.9);
  }

  &:focus {
    outline: none;
  }
`;

/** 
 * Default Button Example
 * Dynamic prop setting.
 * @access public
 */
export const DefaultButton = styled(BaseButton).attrs({
  color: props => props.color || 'rgba(255,255,255,0.3)',
  background: props => props.background || 'rgba(255,255,255,0.3)',
  width: props => props.width || '180px',
  height: props => props.height || 'auto',
  padding: props => props.padding || '.5em',
  margin: props => props.margin || '1em'
})`
  color: ${props => props.color};
  background-color: ${props => props.background};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`;

/** 
 * Preset Button Example
 * Conditional prop setting.
 * @access public
 */
export const PresetButton = styled(BaseButton)`
  ${props => props.small && css`
    font-size: 16px;
    width: 120px;
    height: 60px;
  `}
  ${props => props.large && css`
    font-size: 16px; 
    font-size: 3vw;
    width: 300px;
    height: 180px;
  `}
  ${props => props.rounded && css`
    border-radius: 8px;
  `}
  ${props => props.invertColors && css`
    color: #fff;
    background-color: #db7093;
    &:hover {
      background-color: #E18AA6;
    }
  `}
`;