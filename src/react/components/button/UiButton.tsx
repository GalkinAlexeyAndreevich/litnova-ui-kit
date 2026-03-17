import React from 'react';
import { UIButton as UIButtonElement } from '../../../core/components/button/ui-button';
import { createComponent } from '@lit/react';

export const UIButton = createComponent({
    tagName: 'ui-button',
    elementClass: UIButtonElement,
    react: React,
});