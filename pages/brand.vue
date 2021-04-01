<template>
  <section class="section has-navbar-fixed-top">
    <div class="container is-max-widescreen my-6 py-6">
        <div class="title is-2">Effect <b>Style Guide</b></div>
        <p class="has-limited-width has-text-justified block">This is a style guide template of Effect. The template
            includes logo use, colors, typography, icons, buttons, fields and some images.</p>
        <div class="subtitle is-4"><span class="has-text-secondary">01</span> Color Palette</div>
        <div class="subtitle is-5">Effect Network Colors</div>
        <div class="color">
            <div class="menu-label mb-0"><small>primary</small></div>
            <div  @click="copyToClipboard('#5158fa')" style="background: #5158fa"  class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
            <div class="menu-label mb-0"><span class="overline">HEX</span> #5158fa</div>
            <div class="menu-label mb-0"><span class="overline">RGB</span> (50, 78, 245)</div>
        </div>
        <div class="color">
            <div class="menu-label mb-0"><small>secondary</small></div>
            <div  @click="copyToClipboard('#101D56')" style="background: #101D56"  class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
            <div class="menu-label mb-0"><span class="overline">HEX</span> #101D56</div>
            <div class="menu-label mb-0"><span class="overline">RGB</span>(66, 66, 66)</div>
        </div>
        <div class="color">
            <div class="menu-label mb-0"><small>accent</small></div>
            <div  @click="copyToClipboard('#FF7C2F')" style="background: #FF7C2F"  class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
            <div class="menu-label mb-0"><span class="overline">HEX</span> #FF7C2F</div>
            <div class="menu-label mb-0"><span class="overline">RGB</span>(62, 238, 198)</div>
        </div>
        <br><br>
        <div class="subtitle is-5">dApp Colors</div>
        <div class="color">
          <div class="menu-label mb-0"><small>Effect Force</small></div>
          <div  @click="copyToClipboard('#057cff')" style="background: #057cff" class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
          <div class="menu-label mb-0"><span class="overline">HEX</span> #057cff</div>
          <div class="menu-label mb-0"><span class="overline">RGB</span> (50, 78, 245)</div>
        </div>
        <div class="color">
          <div class="menu-label mb-0"><small>Effect DAO</small></div>
          <div  @click="copyToClipboard('#d7ac00')" style="background: #d7ac00" class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
          <div class="menu-label mb-0"><span class="overline">HEX</span> #d7ac00</div>
          <div class="menu-label mb-0"><span class="overline">RGB</span>(62, 238, 198)</div>
        </div>
        <div class="color">
          <div class="menu-label mb-0"><small>Effect Translate</small></div>
          <div  @click="copyToClipboard('#00c165')" style="background: #00c165" class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
          <div class="menu-label mb-0"><span class="overline">HEX</span> #00c165</div>
          <div class="menu-label mb-0"><span class="overline">RGB</span>(66, 66, 66)</div>
        </div>
        <div class="color">
          <div class="menu-label mb-0"><small>Effect Socials</small></div>
          <div  @click="copyToClipboard('#06c6c6')" style="background: #06c6c6" class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
          <div class="menu-label mb-0"><span class="overline">HEX</span> #06c6c6</div>
          <div class="menu-label mb-0"><span class="overline">RGB</span>(66, 66, 66)</div>
        </div>
        <div class="color">
          <div class="menu-label mb-0"><small>Effect Captions</small></div>
          <div  @click="copyToClipboard('#e06375')" style="background: #e06375" class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
          <div class="menu-label mb-0"><span class="overline">HEX</span> #e06375</div>
          <div class="menu-label mb-0"><span class="overline">RGB</span>(66, 66, 66)</div>
        </div>
        <div class="color">
          <div class="menu-label mb-0"><small>Effect Pieces</small></div>
          <div  @click="copyToClipboard('#999999')" style="background: #999999" class="color-square has-text-white is-size-4"><i class="far fa-copy"></i></div>
          <div class="menu-label mb-0"><span class="overline">HEX</span> #999999</div>
          <div class="menu-label mb-0"><span class="overline">RGB</span>(66, 66, 66)</div>
        </div>
        <br><br>

        <div class="subtitle is-4 mt-4" ><span class="has-text-secondary">02</span> Logo</div>
        <div class="subtitle is-5">Use of the Effect logo</div>
        <div class="is-inline-block p-4 has-text-centered">
          <div>
            <img src="~assets/img/logo.svg" class="mx-auto mb-2 d-block"
                 style="height:100px;" />
          </div>
            <a class="button is-small is-outlined" target="_blank" href="~assets/img/logo.svg" download><i class="fas fa-download mr-2"></i> png</a>
            <a class="button is-small is-outlined" target="_blank" href="~assets/img/logo.svg" download><i class="fas fa-download mr-2"></i> svg</a>
        </div>
        <div class="is-inline-block p-4 has-text-centered has-background-primary">
          <div>
            <img src="~assets/img/logo_white.svg" class="mx-auto mb-2 d-block"
                 style="height:100px;" />
          </div>
          <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/logo_white.svg" download><i class="fas fa-download mr-2"></i> png</a>
          <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/logo_white.svg" download><i class="fas fa-download mr-2"></i> svg</a>
        </div>
      <div class="subtitle is-5 mt-6">Effect Force Logo</div>
      <div class="is-inline-block p-4 has-text-centered">
        <div>
          <img src="~assets/img/dapps/effect-force_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-force_h100.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-force_h100.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="is-inline-block p-4 has-text-centered has-background-primary">
        <div>
          <img src="~assets/img/dapps/effect-force_white_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-force_white.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-force_white.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="subtitle is-5 mt-6">Effect DAO Logo</div>
      <div class="is-inline-block p-4 has-text-centered">
        <div>
          <img src="~assets/img/dapps/effect-dao_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="is-inline-block p-4 has-text-centered has-background-primary">
        <div>
          <img src="~assets/img/dapps/effect-dao_white_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="subtitle is-5 mt-6">Effect Translate Logo</div>
      <div class="is-inline-block p-4 has-text-centered">
        <div>
          <img src="~assets/img/dapps/effect-translate_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="is-inline-block p-4 has-text-centered has-background-primary">
        <div>
          <img src="~assets/img/dapps/effect-translate_white_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="subtitle is-5 mt-6">Effect Socials Logo</div>
      <div class="is-inline-block p-4 has-text-centered">
        <div>
          <img src="~assets/img/dapps/effect-socials_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="is-inline-block p-4 has-text-centered has-background-primary">
        <div>
          <img src="~assets/img/dapps/effect-socials_white_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="subtitle is-5 mt-6">Effect Captions Logo</div>
      <div class="is-inline-block p-4 has-text-centered">
        <div>
          <img src="~assets/img/dapps/effect-captions_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="is-inline-block p-4 has-text-centered has-background-primary">
        <div>
          <img src="~assets/img/dapps/effect-captions_white_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="subtitle is-5 mt-6">Effect DAO Logo</div>
      <div class="is-inline-block p-4 has-text-centered">
        <div>
          <img src="~assets/img/dapps/effect-pieces_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-outlined" target="_blank" href="~assets/img/dapps/effect-dao.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
      <div class="is-inline-block p-4 has-text-centered has-background-primary">
        <div>
          <img src="~assets/img/dapps/effect-pieces_white_h100.png" class="mx-auto mb-2 d-block"
               height="100" />
        </div>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> png</a>
        <a class="button is-small is-white is-outlined" target="_blank" href="~assets/img/dapps/effect-dao_white.png" download><i class="fas fa-download mr-2"></i> svg</a>
      </div>
        <br><br>
      <div class="subtitle is-4 mt-4" ><span class="has-text-secondary">03</span> Buttons</div>
      <div class="subtitle is-5">All buttons styles used for Effect Network</div>
        <button class="button is-secondary"><span v-if="example">{{example}}</span><span v-else>Button</span></button>
        <button class="button is-secondary is-active ml-2"><span v-if="example">{{example}}</span><span v-else>Active</span></button>
        <br><br>
        <button class="button is-accent"><span v-if="example">{{example}}</span><span v-else>Accent</span></button>
        <button class="button is-accent is-active ml-2"><span v-if="example">{{example}}</span><span v-else>Active</span></button>
        <br><br>
        <button class="button is-text"><span v-if="example">{{example}}</span><span v-else>Text Only</span></button>
        <button class="button is-text is-active ml-2"><span v-if="example">{{example}}</span><span v-else>Active</span></button>
        <br><br>
        <button class="button is-secondary is-outlined"><span v-if="example">{{example}}</span><span v-else>Outlined</span></button>
        <button class="button is-secondary is-outlined is-active ml-2"><span v-if="example">{{example}}</span><span v-else>Active</span></button>
        <br><br>
        <div class="is-flex is-align-items-center">
          <button class="button is-secondary  is-small"><span v-if="example">{{example}}</span><span v-else>Small</span></button>
          <button class="button is-secondary mx-2"><span v-if="example">{{example}}</span><span v-else>Normal</span></button>
          <button class="button is-secondary mx-2 is-medium"><span v-if="example">{{example}}</span><span v-else>Medium</span></button>
          <button class="button is-secondary mx-2 is-large"><span v-if="example">{{example}}</span><span v-else>Large</span></button>
        </div>
        <br>
        <button class="button is-secondary is-loading"><span v-if="example">{{example}}</span><span v-else>Loading</span></button>
        <button class="button is-secondary is-disabled"><span v-if="example">{{example}}</span><span v-else>Disabled</span></button>
        <br><br>

        <div class="headline  mt-6 mb-2"><b><span class="secondary--text">04</span> Typography</b></div>
        <p class="intro-text text-justify body-1 mb-6">Below you will find the typography for Rosette. It includes a
            preview and the css values that are used, like font-family, font-size, font-weight and line-height etc.</p>
        <v-simple-table class="typography">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">CSS</th>
                    <th class="text-left">Class</th>
                    <th class="text-left">Information</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 200;
font-size: 72px;
line-height: 72px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.display-4</code></td>
                    <td class="display-4 py-3">Heading H1 <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 200;
font-size: 60px;
line-height: 60px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.display-3</code></td>
                    <td class="display-3 py-3">Heading H2 <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 200;
font-size: 48px;
line-height: 50px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.display-2</code></td>
                    <td class="display-2 py-3">Heading H3 <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 400;
font-size: 34px;
line-height: 40px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.display-1</code></td>
                    <td class="display-1 py-3">Heading H4 <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 300;
font-size: 24px;
line-height: 32px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.headline</code></td>
                    <td class="headline py-3">Heading H5 <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 300;
font-size: 20px;
line-height: 32px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.title</code></td>
                    <td class="title py-3">Heading H6 <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 400;
font-size: 16px;
line-height: 28px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.subtitle-1</code></td>
                    <td class="subtitle-1 py-3">Subtitle 1 <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 400;
font-size: 14px;
line-height: 22px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.subtitle-2</code></td>
                    <td class="subtitle-2 py-3">Subtitle 2 <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.body-1</code></td>
                    <td class="body-1 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae
                        scelerisque quam. Morbi blandit quam commodo viverra malesuada. Duis quis tortor porta,
                        tincidunt quam sed, auctor lacus.
                    </td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.body-2</code></td>
                    <td class="body-2 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae
                        scelerisque quam. Morbi blandit quam commodo viverra malesuada. Duis quis tortor porta,
                        tincidunt quam sed, auctor lacus.
                    </td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 400;
font-size: 12px;
line-height: 20px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.caption</code></td>
                    <td class="caption py-3">Caption <b>Bolder</b></td>
                </tr>
                <tr>
                    <td class="py-2"><pre class="grey--text">
font-family: Roboto;
font-weight: 400;
font-size: 10px;
line-height: 16px;
letter-spacing: 1;</pre>
                    </td>
                    <td><code>.overline</code></td>
                    <td class="overline py-3">Overline <b>Bolder</b></td>
                </tr>
                </tbody>
            </template>

        </v-simple-table>
        <div class="headline  mt-6 mb-2"><b><span class="secondary--text">05</span> Rosette Content Pack</b></div>
        <p class="intro-text text-justify body-1 mb-6">Below you will find a link to the Rosette Content Pack. It includes
            source files that you can use to create your own content</p>
        <br>
        <v-btn x-large target="_blank" color="primary" href="https://drive.google.com/drive/folders/1l9QH_kq_cqRgfuFLd9uh5AZY8ACOPC-P?usp=sharing">Rosette Content Pack</v-btn>
    </div>
  </section>
</template>

<script>

    export default {
        name: 'Brand',
        data() {
            return {
                example: null
            };
        },
        mounted() {
            const hoverButtons = document.querySelectorAll('.hoverButton');
            for (let hoverButton of hoverButtons) {
                hoverButton.focus()
            }
        },
        methods: {
            copyToClipboard: function (text) {
                let reflink = document.createElement('input');
                reflink.setAttribute('value', text);
                document.body.appendChild(reflink);
                try {
                    reflink.select();
                    var successful = document.execCommand('copy');
                    var msg = successful ? 'successful' : 'unsuccessfully';
                    //this.$snackbar.show({text: text + ' is copied ' + msg, color: successful ? 'success' : 'error'});
                } catch (err) {
                    console.log(err)
                    alert("unable to copy")
                }
                document.body.removeChild(reflink);
            }
        }
    };
</script>
<style lang="scss" scoped>
    .color {
        display: inline-block;
        margin-right: 25px;
        min-width: 65px;
        &.color-small {
            margin-right: 10px;

            .color-square {
                width: 50px;
                height: 50px;
            }
            .color-text {
                line-height: 14px;
            }
        }
        .color-square {
            width: 100px;
            display:flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            i {
                opacity: 0;
                transition: 0.2s;
            }
            &:hover {
                i {
                    opacity: 1;
                }
            }
            height: 100px;

        }

    }

    .typography {
        code {
            white-space: nowrap;
        }
    }
</style>
