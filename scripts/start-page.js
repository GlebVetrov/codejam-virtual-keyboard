const startPage = `<div class="wrapper">
            <textarea id="result" rows="6" cols="60"></textarea>
            <div class="keyboard">
                <div class="row"><div class="key">
          <span class="Backquote on">
            <span class="case down">ё</span>
            <span class="case up">Ё</span>
          </span>
                    <span class="Backquote off">
            <span class="case down">\`</span>
            <span class="case up">~</span>
          </span>
                </div><div class="key">
          <span class="Digit1 on">
            <span class="case down">1</span>
            <span class="case up">!</span>
          </span>
                    <span class="Digit1 off">
            <span class="case down">1</span>
            <span class="case up">!</span>
          </span>
                </div><div class="key">
          <span class="Digit2 on">
            <span class="case down">2</span>
            <span class="case up">"</span>
          </span>
                    <span class="Digit2 off">
            <span class="case down">2</span>
            <span class="case up">@</span>
          </span>
                </div><div class="key">
          <span class="Digit3 on">
            <span class="case down">3</span>
            <span class="case up">№</span>
          </span>
                    <span class="Digit3 off">
            <span class="case down">3</span>
            <span class="case up">#</span>
          </span>
                </div><div class="key">
          <span class="Digit4 on">
            <span class="case down">4</span>
            <span class="case up">;</span>
          </span>
                    <span class="Digit4 off">
            <span class="case down">4</span>
            <span class="case up">$</span>
          </span>
                </div><div class="key">
          <span class="Digit5 on">
            <span class="case down">5</span>
            <span class="case up">%</span>
          </span>
                    <span class="Digit5 off">
            <span class="case down">5</span>
            <span class="case up">%</span>
          </span>
                </div><div class="key">
          <span class="Digit6 on">
            <span class="case down">6</span>
            <span class="case up">:</span>
          </span>
                    <span class="Digit6 off">
            <span class="case down">6</span>
            <span class="case up">^</span>
          </span>
                </div><div class="key">
          <span class="Digit7 on">
            <span class="case down">7</span>
            <span class="case up">?</span>
          </span>
                    <span class="Digit7 off">
            <span class="case down">7</span>
            <span class="case up">&amp;</span>
          </span>
                </div><div class="key">
          <span class="Digit8 on">
            <span class="case down">8</span>
            <span class="case up">*</span>
          </span>
                    <span class="Digit8 off">
            <span class="case down">8</span>
            <span class="case up">*</span>
          </span>
                </div><div class="key">
          <span class="Digit9 on">
            <span class="case down">9</span>
            <span class="case up">(</span>
          </span>
                    <span class="Digit9 off">
            <span class="case down">9</span>
            <span class="case up">(</span>
          </span>
                </div><div class="key">
          <span class="Digit0 on">
            <span class="case down">0</span>
            <span class="case up">)</span>
          </span>
                    <span class="Digit0 off">
            <span class="case down">0</span>
            <span class="case up">)</span>
          </span>
                </div><div class="key">
          <span class="Minus on">
            <span class="case down">-</span>
            <span class="case up">_</span>
          </span>
                    <span class="Minus off">
            <span class="case down">-</span>
            <span class="case up">_</span>
          </span>
                </div><div class="key">
          <span class="Equal on">
            <span class="case down">=</span>
            <span class="case up">+</span>
          </span>
                    <span class="Equal off">
            <span class="case down">=</span>
            <span class="case up">+</span>
          </span>
                </div><div class="key backspace">
          <span class="Backspace on">
            <span class="case down">Backspace</span>
            <span class="case up">Backspace</span>
          </span>
                    <span class="Backspace off">
            <span class="case down">Backspace</span>
            <span class="case up">Backspace</span>
          </span>
                </div>
                </div><div class="row"><div class="key tab">
          <span class="Tab on">
            <span class="case down">Tab</span>
            <span class="case up">Tab</span>
          </span>
                <span class="Tab off">
            <span class="case down">Tab</span>
            <span class="case up">Tab</span>
          </span>
            </div><div class="key">
          <span class="KeyQ on">
            <span class="case down">й</span>
            <span class="case up">Й</span>
          </span>
                <span class="KeyQ off">
            <span class="case down">q</span>
            <span class="case up">Q</span>
          </span>
            </div><div class="key">
          <span class="KeyW on">
            <span class="case down">ц</span>
            <span class="case up">Ц</span>
          </span>
                <span class="KeyW off">
            <span class="case down">w</span>
            <span class="case up">W</span>
          </span>
            </div><div class="key">
          <span class="KeyE on">
            <span class="case down">у</span>
            <span class="case up">У</span>
          </span>
                <span class="KeyE off">
            <span class="case down">e</span>
            <span class="case up">E</span>
          </span>
            </div><div class="key">
          <span class="KeyR on">
            <span class="case down">к</span>
            <span class="case up">К</span>
          </span>
                <span class="KeyR off">
            <span class="case down">r</span>
            <span class="case up">R</span>
          </span>
            </div><div class="key">
          <span class="KeyT on">
            <span class="case down">е</span>
            <span class="case up">Е</span>
          </span>
                <span class="KeyT off">
            <span class="case down">t</span>
            <span class="case up">T</span>
          </span>
            </div><div class="key">
          <span class="KeyY on">
            <span class="case down">н</span>
            <span class="case up">Н</span>
          </span>
                <span class="KeyY off">
            <span class="case down">y</span>
            <span class="case up">Y</span>
          </span>
            </div><div class="key">
          <span class="KeyU on">
            <span class="case down">г</span>
            <span class="case up">Г</span>
          </span>
                <span class="KeyU off">
            <span class="case down">u</span>
            <span class="case up">U</span>
          </span>
            </div><div class="key">
          <span class="KeyI on">
            <span class="case down">ш</span>
            <span class="case up">Ш</span>
          </span>
                <span class="KeyI off">
            <span class="case down">i</span>
            <span class="case up">I</span>
          </span>
            </div><div class="key">
          <span class="KeyO on">
            <span class="case down">щ</span>
            <span class="case up">Щ</span>
          </span>
                <span class="KeyO off">
            <span class="case down">o</span>
            <span class="case up">O</span>
          </span>
            </div><div class="key">
          <span class="KeyP on">
            <span class="case down">з</span>
            <span class="case up">З</span>
          </span>
                <span class="KeyP off">
            <span class="case down">p</span>
            <span class="case up">P</span>
          </span>
            </div><div class="key">
          <span class="BracketLeft on">
            <span class="case down">х</span>
            <span class="case up">Х</span>
          </span>
                <span class="BracketLeft off">
            <span class="case down">[</span>
            <span class="case up">{</span>
          </span>
            </div><div class="key">
          <span class="BracketRight on">
            <span class="case down">ъ</span>
            <span class="case up">Ъ</span>
          </span>
                <span class="BracketRight off">
            <span class="case down">]</span>
            <span class="case up">}</span>
          </span>
            </div><div class="key">
          <span class="Backslash on">
            <span class="case down">\\</span>
            <span class="case up">/</span>
          </span>
                <span class="Backslash off">
            <span class="case down">\\</span>
            <span class="case up">|</span>
          </span>
            </div><div class="key del">
          <span class="Delete on">
            <span class="case down">DEL</span>
            <span class="case up">DEL</span>
          </span>
                <span class="Delete off">
            <span class="case down">DEL</span>
            <span class="case up">DEL</span>
          </span>
            </div>
            </div><div class="row"><div class="key capslock">
          <span class="CapsLock on">
            <span class="case down">CapsLock</span>
            <span class="case up">CapsLock</span>
          </span>
                <span class="CapsLock off">
            <span class="case down">CapsLock</span>
            <span class="case up">CapsLock</span>
          </span>
            </div><div class="key">
          <span class="KeyA on">
            <span class="case down">ф</span>
            <span class="case up">Ф</span>
          </span>
                <span class="KeyA off">
            <span class="case down">a</span>
            <span class="case up">A</span>
          </span>
            </div><div class="key">
          <span class="KeyS on">
            <span class="case down">ы</span>
            <span class="case up">Ы</span>
          </span>
                <span class="KeyS off">
            <span class="case down">s</span>
            <span class="case up">S</span>
          </span>
            </div><div class="key">
          <span class="KeyD on">
            <span class="case down">в</span>
            <span class="case up">В</span>
          </span>
                <span class="KeyD off">
            <span class="case down">d</span>
            <span class="case up">D</span>
          </span>
            </div><div class="key">
          <span class="KeyF on">
            <span class="case down">а</span>
            <span class="case up">А</span>
          </span>
                <span class="KeyF off">
            <span class="case down">f</span>
            <span class="case up">F</span>
          </span>
            </div><div class="key">
          <span class="KeyG on">
            <span class="case down">п</span>
            <span class="case up">П</span>
          </span>
                <span class="KeyG off">
            <span class="case down">g</span>
            <span class="case up">G</span>
          </span>
            </div><div class="key">
          <span class="KeyH on">
            <span class="case down">р</span>
            <span class="case up">Р</span>
          </span>
                <span class="KeyH off">
            <span class="case down">h</span>
            <span class="case up">H</span>
          </span>
            </div><div class="key">
          <span class="KeyJ on">
            <span class="case down">о</span>
            <span class="case up">О</span>
          </span>
                <span class="KeyJ off">
            <span class="case down">j</span>
            <span class="case up">J</span>
          </span>
            </div><div class="key">
          <span class="KeyK on">
            <span class="case down">л</span>
            <span class="case up">Л</span>
          </span>
                <span class="KeyK off">
            <span class="case down">k</span>
            <span class="case up">K</span>
          </span>
            </div><div class="key">
          <span class="KeyL on">
            <span class="case down">д</span>
            <span class="case up">Д</span>
          </span>
                <span class="KeyL off">
            <span class="case down">l</span>
            <span class="case up">L</span>
          </span>
            </div><div class="key">
          <span class="Semicolon on">
            <span class="case down">ж</span>
            <span class="case up">Ж</span>
          </span>
                <span class="Semicolon off">
            <span class="case down">;</span>
            <span class="case up">:</span>
          </span>
            </div><div class="key">
          <span class="Quote on">
            <span class="case down">э</span>
            <span class="case up">Э</span>
          </span>
                <span class="Quote off">
            <span class="case down">'</span>
            <span class="case up">"</span>
          </span>
            </div><div class="key enter">
          <span class="Enter on">
            <span class="case down">ENTER</span>
            <span class="case up">ENTER</span>
          </span>
                <span class="Enter off">
            <span class="case down">ENTER</span>
            <span class="case up">ENTER</span>
          </span>
            </div>
            </div><div class="row"><div class="key shift">
          <span class="ShiftLeft on">
            <span class="case down">Shift</span>
            <span class="case up">Shift</span>
          </span>
                <span class="ShiftLeft off">
            <span class="case down">Shift</span>
            <span class="case up">Shift</span>
          </span>
            </div><div class="key">
          <span class="KeyZ on">
            <span class="case down">я</span>
            <span class="case up">Я</span>
          </span>
                <span class="KeyZ off">
            <span class="case down">z</span>
            <span class="case up">Z</span>
          </span>
            </div><div class="key">
          <span class="KeyX on">
            <span class="case down">ч</span>
            <span class="case up">Ч</span>
          </span>
                <span class="KeyX off">
            <span class="case down">x</span>
            <span class="case up">X</span>
          </span>
            </div><div class="key">
          <span class="KeyC on">
            <span class="case down">с</span>
            <span class="case up">С</span>
          </span>
                <span class="KeyC off">
            <span class="case down">c</span>
            <span class="case up">C</span>
          </span>
            </div><div class="key">
          <span class="KeyV on">
            <span class="case down">м</span>
            <span class="case up">М</span>
          </span>
                <span class="KeyV off">
            <span class="case down">v</span>
            <span class="case up">V</span>
          </span>
            </div><div class="key">
          <span class="KeyB on">
            <span class="case down">и</span>
            <span class="case up">И</span>
          </span>
                <span class="KeyB off">
            <span class="case down">b</span>
            <span class="case up">B</span>
          </span>
            </div><div class="key">
          <span class="KeyN on">
            <span class="case down">т</span>
            <span class="case up">Т</span>
          </span>
                <span class="KeyN off">
            <span class="case down">n</span>
            <span class="case up">N</span>
          </span>
            </div><div class="key">
          <span class="KeyM on">
            <span class="case down">ь</span>
            <span class="case up">Ь</span>
          </span>
                <span class="KeyM off">
            <span class="case down">m</span>
            <span class="case up">M</span>
          </span>
            </div><div class="key">
          <span class="Comma on">
            <span class="case down">б</span>
            <span class="case up">Б</span>
          </span>
                <span class="Comma off">
            <span class="case down">.</span>
            <span class="case up">&lt;</span>
          </span>
            </div><div class="key">
          <span class="Period on">
            <span class="case down">ю</span>
            <span class="case up">Ю</span>
          </span>
                <span class="Period off">
            <span class="case down">,</span>
            <span class="case up">&gt;</span>
          </span>
            </div><div class="key">
          <span class="Slash on">
            <span class="case down">.</span>
            <span class="case up">,</span>
          </span>
                <span class="Slash off">
            <span class="case down">/</span>
            <span class="case up">?</span>
          </span>
            </div><div class="key arrow">
          <span class="ArrowUp on">
            <span class="case down">▲</span>
            <span class="case up">▲</span>
          </span>
                <span class="ArrowUp off">
            <span class="case down">▲</span>
            <span class="case up">▲</span>
          </span>
            </div><div class="key shift-right">
          <span class="ShiftRight on">
            <span class="case down">Shift</span>
            <span class="case up">Shift</span>
          </span>
                <span class="ShiftRight off">
            <span class="case down">Shift</span>
            <span class="case up">Shift</span>
          </span>
            </div>
            </div><div class="row"><div class="key ctrl">
          <span class="ControlLeft on">
            <span class="case down">Ctrl</span>
            <span class="case up">Ctrl</span>
          </span>
                <span class="ControlLeft off">
            <span class="case down">Ctrl</span>
            <span class="case up">Ctrl</span>
          </span>
            </div><div class="key win">
          <span class="MetaLeft on">
            <span class="case down">Win</span>
            <span class="case up">Win</span>
          </span>
                <span class="MetaLeft off">
            <span class="case down">Win</span>
            <span class="case up">Win</span>
          </span>
            </div><div class="key alt">
          <span class="AltLeft on">
            <span class="case down">Alt</span>
            <span class="case up">Alt</span>
          </span>
                <span class="AltLeft off">
            <span class="case down">Alt</span>
            <span class="case up">Alt</span>
          </span>
            </div><div class="key space">
          <span class="Space on">
            <span class="case down"> </span>
            <span class="case up"> </span>
          </span>
                <span class="Space off">
            <span class="case down"> </span>
            <span class="case up"> </span>
          </span>
            </div><div class="key alt">
          <span class="AltRight on">
            <span class="case down">Alt</span>
            <span class="case up">Alt</span>
          </span>
                <span class="AltRight off">
            <span class="case down">Alt</span>
            <span class="case up">Alt</span>
          </span>
            </div><div class="key arrow">
          <span class="ArrowLeft on">
            <span class="case down">◄</span>
            <span class="case up">◄</span>
          </span>
                <span class="ArrowLeft off">
            <span class="case down">◄</span>
            <span class="case up">◄</span>
          </span>
            </div><div class="key arrow">
          <span class="ArrowDown on">
            <span class="case down">▼</span>
            <span class="case up">▼</span>
          </span>
                <span class="ArrowDown off">
            <span class="case down">▼</span>
            <span class="case up">▼</span>
          </span>
            </div><div class="key arrow">
          <span class="ArrowRight on">
            <span class="case down">►</span>
            <span class="case up">►</span>
          </span>
                <span class="ArrowRight off">
            <span class="case down">►</span>
            <span class="case up">►</span>
          </span>
            </div><div class="key ctrl">
          <span class="ControlRight on">
            <span class="case down">Ctrl</span>
            <span class="case up">Ctrl</span>
          </span>
                <span class="ControlRight off">
            <span class="case down">Ctrl</span>
            <span class="case up">Ctrl</span>
          </span>
            </div>
            </div>
            </div></div>`;
const field = document.getElementById('keyboard');
field.innerHTML = startPage;