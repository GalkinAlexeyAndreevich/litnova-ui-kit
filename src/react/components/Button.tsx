import React from 'react';
import { UIButton } from '../../core';
import { createComponent } from '@lit/react';

export const ButtonComponent = createComponent({
    tagName: 'ui-button',
    elementClass: UIButton,
    react: React,
});