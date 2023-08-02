/*
 * File: script.js
 * Project: change-background
 * File Created: Saturday, 29th July 2023 2:08:13 pm
 * Author: Emon Krismon (emonkrismon98@gmail.com)
 * Github: https://github.com/krismonsemanas
 * -----
 * Last Modified: Saturday, 29th July 2023 2:10:00 pm
 * Modified By: Emon Krismon (emonkrismon98@gmail.com>)
 * -----
 * Copyright 2023, Kris Dev
 */

const colorPicker = document.getElementById('color')
const body = document.body

colorPicker.addEventListener('input', () => {
    body.style.backgroundColor = colorPicker.value
})