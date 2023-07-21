<script setup lang="ts">
const colors = {
    primary: {
        50: '#e8eaff',
        100: '#c0c2f5',
        200: '#9799e8',
        300: '#6f70de',
        400: '#4647d3',
        500: '#2c2db9',
        600: '#212391',
        700: '#171969',
        800: '#0c0e41',
        900: '#04041c'
    },

    secondary: {
        50: '#fbfbdf',
        100: '#f0f0bc',
        200: '#e7e695',
        300: '#dddc6e',
        400: '#d3d246',
        500: '#b9b82c',
        600: '#908f20',
        700: '#676614',
        800: '#3e3d09',
        900: '#161400'
    },
    success: {
        50: '#e2fbed',
        100: '#c2ebd4',
        200: '#9fddb9',
        300: '#7ccf9e',
        400: '#58c184',
        500: '#3ea76a',
        600: '#2e8251',
        700: '#1f5d3a',
        800: '#0f3921',
        900: '#001506'
    },

    warning: {
        50: '#fff8de',
        100: '#f9eab6',
        200: '#f3dc8b',
        300: '#eecf5e',
        400: '#e9c131',
        500: '#d0a719',
        600: '#a18211',
        700: '#735d09',
        800: '#453802',
        900: '#191300'
    },

    info: {
        50: '#e5eeff',
        100: '#b9cbfb',
        200: '#8da9f3',
        300: '#6186eb',
        400: '#3564e4',
        500: '#1b4aca',
        600: '#123abd',
        700: '#0a2972',
        800: '#031947',
        900: '#00081d'
    },

    danger: {
        50: '#ffe4e4',
        100: '#fcb8b8',
        200: '#f48c8c',
        300: '#ee5e5e',
        400: '#e73131',
        500: '#ce1818',
        600: '#a11011',
        700: '#73090b',
        800: '#480405',
        900: '#1f0000'
    },

    light: {
        50: '#ffffff',
        100: '#fefefe',
        200: '#fdfdfd',
        300: '#fcfcfc',
        400: '#fbfbfb',
        500: '#fafafa',
        600: '#e6e6e6',
        700: '#bfbfbf',
        800: '#999999',
        900: '#737373'
    },

    dark: {
        50: '#666666',
        100: '#555555',
        200: '#444444',
        300: '#333333',
        400: '#222222',
        500: '#151515',
        600: '#121212',
        700: '#0f0f0f',
        800: '#0d0d0d',
        900: '#000000'
    }
}
</script>

# Colors

By default, Nethren-UI ships with the following colors. Each component is colored based on appropriate shades of the following swatches.
Use the lowercase of each swatch name when setting colors for components as props (ex: Primary swatch should be primary).

## Default color pallete

### Primary

<div class="swatch">
    <div v-for="shade, shadeKey in colors.primary" class="swatch__color">
        <div  class="swatch__color__shade" :style="{ backgroundColor: shade }" ></div>
        <div class="swatch__color__info">
            <p>{{shadeKey }}</p>
            <span>{{ shade }}</span>   
        </div>
    </div>
</div>

### Secondary

<div class="swatch">
    <div v-for="shade, shadeKey in colors.secondary" class="swatch__color">
        <div  class="swatch__color__shade" :style="{ backgroundColor: shade }" ></div>
        <div class="swatch__color__info">
            <p>{{shadeKey }}</p>
            <span>{{ shade }}</span>   
        </div>
    </div>
</div>

### Success

<div class="swatch">
    <div v-for="shade, shadeKey in colors.success" class="swatch__color">
        <div  class="swatch__color__shade" :style="{ backgroundColor: shade }" ></div>
        <div class="swatch__color__info">
            <p>{{shadeKey }}</p>
            <span>{{ shade }}</span>   
        </div>
    </div>
</div>

### Info

<div class="swatch">
    <div v-for="shade, shadeKey in colors.info" class="swatch__color">
        <div  class="swatch__color__shade" :style="{ backgroundColor: shade }" ></div>
        <div class="swatch__color__info">
            <p>{{shadeKey }}</p>
            <span>{{ shade }}</span>   
        </div>
    </div>
</div>

### Warning

<div class="swatch">
    <div v-for="shade, shadeKey in colors.warning" class="swatch__color">
        <div  class="swatch__color__shade" :style="{ backgroundColor: shade }" ></div>
        <div class="swatch__color__info">
            <p>{{shadeKey }}</p>
            <span>{{ shade }}</span>   
        </div>
    </div>
</div>

### Danger

<div class="swatch">
    <div v-for="shade, shadeKey in colors.danger" class="swatch__color">
        <div  class="swatch__color__shade" :style="{ backgroundColor: shade }" ></div>
        <div class="swatch__color__info">
            <p>{{shadeKey }}</p>
            <span>{{ shade }}</span>   
        </div>
    </div>
</div>

### Dark

<div class="swatch">
    <div v-for="shade, shadeKey in colors.dark" class="swatch__color">
        <div  class="swatch__color__shade" :style="{ backgroundColor: shade }" ></div>
        <div class="swatch__color__info">
            <p>{{shadeKey }}</p>
            <span>{{ shade }}</span>   
        </div>
    </div>
</div>

### Light

<div class="swatch">
    <div v-for="shade, shadeKey in colors.light" class="swatch__color">
        <div  class="swatch__color__shade" :style="{ backgroundColor: shade }" ></div>
        <div class="swatch__color__info">
            <p>{{shadeKey }}</p>
            <span>{{ shade }}</span>   
        </div>
    </div>
</div>


<style>

.swatch  * {
    padding: 0 !important;
    margin: 0 !important;
}
.swatch {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
}

.swatch__color {
    display: flex;
    flex-direction: column;
}

.swatch__color__info {
    font-size: 0.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    
}

.swatch__color__info p {
}

.swatch__color__info span {
    font-weight: 200;
}

.swatch__color__shade {
    border-radius: 0.375rem;
    width: 5rem;
    height: 5rem;
}
</style>