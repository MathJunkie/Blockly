/**
 * Created by Bomberus on 28.03.2016.
 */
/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.input');

goog.require('Blockly.Blocks');

Blockly.Blocks.input.HUE = 210;
Blockly.Blocks['input'] = {
    init: function() {
        this.setColour(210);
        this.appendDummyInput()
            .appendField('Leer');
        this.setOutput(true, 'Type');
        this.setTooltip('Any type is allowed.');
        this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602');
    }
};

//Input_Vektor (grad)

//Input_Matrix (grad)

//Input_Textbox (width)

//Input_RangeSlider (min,max,step,[min,max])

//Input_slider (min,max,step,initial)

//Input_color_selector

//Input_checkbox

Blockly.Blocks['input_item'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("var"), "Bezeichner")
            .appendField(new Blockly.FieldDropdown([["Nummer", "Nummer"], ["Text", "Text"], ["Funktion", "Funktion"], ["Methode", "Methode"], ["Matrix", "Matrix"], ["Vektor", "Vektor"]]), "type");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "Input");
        this.setNextStatement(true, "Input");
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['input_list'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck('Input')
            .appendField("Dynamische Eingaben");
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
