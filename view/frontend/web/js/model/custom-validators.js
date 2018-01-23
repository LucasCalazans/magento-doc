define([
    'jquery',
    'jquery/validate',
    'mage/translate'
], function ($) {
    'use strict';

    $.validator.addMethod('custom-validator', function(value, element, option) {
        return (+value === 42);
    }, $.mage.__('This field must be equal to 42.'));

    return true;
});