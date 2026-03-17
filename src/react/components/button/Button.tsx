import React from 'react';
import { UIButton } from '../../../core/components/button/ui-button';
import { createComponent } from '@lit/react';

export const ButtonComponent = createComponent({
    tagName: 'ui-button',
    elementClass: UIButton,
    react: React,
});