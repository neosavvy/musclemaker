import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import PrimaryButton from '../../../../src/js/components/button/primary_button.component.js';
import SecondaryButton from '../../../../src/js/components/button/primary_button.component.js';
import TertiaryButton from '../../../../src/js/components/button/primary_button.component.js';

storiesOf('Buttons', module)
    .add('Primary Button', () => (
        <PrimaryButton>Primary</PrimaryButton>
    ))
    .add('Secondary Button', () => (
        <SecondaryButton>Secondary</SecondaryButton>
    ))
    .add('Tertiary Button', () => (
        <TertiaryButton>Tertiary</TertiaryButton>
    ));
