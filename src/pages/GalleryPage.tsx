import '../pages.scss';
import '../theme.scss'
import Card from "../components/card";
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/checkbox/checkbox.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

/** Knob types for checkbox stories. */
export interface StoryKnobs {
    checked: boolean;
    disabled: boolean;
    indeterminate: boolean;
}


function GalleryPage() {
    const disabled = false;
    return (
        <>
        <section className='p-4'>

            <section className='gallery-content'>
                <aside>
                    <h2 className='title'>Filtros</h2>
                    <p className='sub-title'>Por categoría</p>
                    <div className="content-category">
                    <label>
                        <md-checkbox touch-target="wrapper"></md-checkbox>
                        Checkbox one
                    </label>
                    <label>
                        <md-checkbox touch-target="wrapper"></md-checkbox>
                        Checkbox one
                    </label>
                    <label>
                        <md-checkbox touch-target="wrapper"></md-checkbox>
                        Checkbox one
                    </label>
                    </div>
                    <p className='sub-title'>Por marca</p>
                    <div className="content-category">
                        <label>
                            <md-checkbox touch-target="wrapper"></md-checkbox>
                            Checkbox one
                        </label>
                        <label>
                            <md-checkbox touch-target="wrapper"></md-checkbox>
                            Checkbox one
                        </label>
                        <label>
                            <md-checkbox touch-target="wrapper"></md-checkbox>
                            Checkbox one
                        </label>
                        </div>
                </aside >
                <section className='contet-products'>
                <div className='flex justify-between mb-4'>
                <md-outlined-text-field placeholder="Search for messages">
                    <md-icon slot="leading-icon">search</md-icon>
                </md-outlined-text-field>


                <md-outlined-select>
                <md-select-option selected value="Relevancia">
                    <div slot="headline">relevancia</div>
                </md-select-option>
                <md-select-option value="menor precio">
                    <div slot="headline">menor precio</div>
                </md-select-option>
                </md-outlined-select>

            </div>
            <div className='content-card'>
            <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
                    <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
                    <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
                    <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
                    <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
                    <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
                    <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
                    <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
                    <Card title="Product" price="s/ 99" img="../public/img/product1.png" />
            </div>
                </section>
            </section>
        </section>
        </>
    );
}
export default GalleryPage