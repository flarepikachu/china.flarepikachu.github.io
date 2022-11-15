class dropdown2 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="mobilemenu">
                <ul>
                    <li>
                        <a class='fullwidth' href="/patch-notes/illusion-vanguard.html">
                            <i class="fa-solid fa-hashtag fa-fw">
                            </i><span>Patch Notes</span></a>
                    </li>
                    <li>
                        <a class='fullwidth' href="/index.html">
                            <i class="fa-solid fa-magnifying-glass fa-fw">
                            </i><span>Overview</span></a>
                    </li>
                    <li>
                        <a class='direlink' href="/wave-defense/wave-defense.html">
                            <i class="fa-solid fa-house-tsunami fa-fw">
                            </i><span>Wave Defense</span></a>
                    </li>
                    <li>
                    <li id="class">
                        <a class="fullwidth nopad" href="javascript:void(0);" onclick="classdd()">
                            <i class="fa-solid fa-circle-info fa-fw"></i><span>技能与加成</span></a>
                    </li>
                        <div id="class-dropdown" class="dropdowns">
                            <ul>
                                <li id="mage">
                                    <a class="fullwidth nopad" href="javascript:void(0);" onclick="magedd()">
                                <span>法师</span></a>
                                </li>
                                <div id="mage-dropdown" class="dropdowns">
                                    <ul>
                                        <li><a class='fullwidtha' href="/skills/mage/pyromancer.html"><span>火系法师</span></a></li>
                                        <li><a class='fullwidtha' href="/skills/mage/cryomancer.html"><span>冰系法师</span></a></li>
                                        <li><a class='fullwidtha' href="/skills/mage/aquamancer.html"><span>水系法师</span></a></li>
                                    </ul>
                                </div>
                                <li id="paladin">
                                    <a class="fullwidth nopad" href="javascript:void(0);" onclick="paladindd()">
                                    <span>圣骑士</span></a>
                                </li>
                                <div id="paladin-dropdown" class="dropdowns">
                                <ul>
                                    <li><a class='fullwidtha' href="/skills/paladin/avenger.html"><span>复仇者</span></a></li>
                                    <li><a class='fullwidtha' href="/skills/paladin/crusader.html"><span>十字军</span></a></li>
                                    <li><a class='fullwidtha' href="/skills/paladin/protector.html"><span>守护者</span></a></li>
                                </ul>
                                </div>
                                <li id="warrior">
                                    <a class="fullwidth nopad" href="javascript:void(0);" onclick="warriordd()">
                                    <span>战士</span></a>
                                </li>
                                <div id="warrior-dropdown" class="dropdowns">
                                <ul>
                                    <li><a class='fullwidtha' href="/skills/warrior/berserker.html"><span>狂战士</span></a></li>
                                    <li><a class='fullwidtha' href="/skills/warrior/defender.html"><span>防御者</span></a></li>
                                    <li><a class='fullwidtha' href="/skills/warrior/revenant.html"><span>亡魂领主</span></a></li>
                                </ul>
                                </div>
                                <li id="shaman">
                                    <a class="fullwidth nopad" href="javascript:void(0);" onclick="shamandd()">
                                    <span>萨满</span></a>
                                </li>
                                <div id="shaman-dropdown" class="dropdowns">
                                <ul>
                                    <li><a class='fullwidtha' href="/skills/shaman/thunderlord.html"><span>雷电领主</span></a></li>
                                    <li><a class='fullwidtha' href="/skills/shaman/spiritguard.html"><span>灵魂近卫</span></a></li>
                                    <li><a class='fullwidtha' href="/skills/shaman/earthwarden.html"><span>大地守护神</span></a></li>
                                </ul>
                                </div>
                                <li id="rogue">
                                    <a class="fullwidth nopad" href="javascript:void(0);" onclick="roguedd()">
                                    <span>侠盗</span></a>
                                </li>
                                <div id="rogue-dropdown" class="dropdowns">
                                <ul>
                                    <li><a class='fullwidtha' href="/skills/rogue/assassin.html"><span>刺客</span></a></li>
                                    <li><a class='fullwidtha' href="/skills/rogue/vindicator.html"><span>维护者</span></a></li>
                                    <li><a class='fullwidtha' href="/skills/rogue/apothecary.html"><span>药剂师</span></a></li>
                                </ul>
                                </div>
                            </ul>
                        </div>

                    <li id="guilds">
                        <a class="fullwidth nopad" href="javascript:void(0);" onclick="guildsdd()">
                            <i class="fa-solid fa-place-of-worship fa-fw"></i><span>Guilds</span></a>
                    </li>

                    <li>
                        <div id="guilds-dropdown" class="dropdowns">
                            <ul>
                            
                                <li>
                                    <a class='fullwidtha' href="/guilds/guilds.html"><span>Overview</span></a>
                                </li>
                                <!--<li>
                                    <a class='fullwidtha' href="/guilds/chat.html"><span>Guild Chat</span></a>
                                </li>-->
                                <li>
                                    <a class='fullwidtha' href="/guilds/levels.html"><span>Guild Levels and EXP</span></a>
                                </li>
                                <!--<li>
                                    <a class='fullwidtha' href="/guilds/bank.html"><span>Guild Bank</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/guilds/upgrades.html"><span>Guild Upgrades</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/guilds/settings.html"><span>Guild Settings and
                                            Permissions</span></a>
                                </li>-->
                            </ul>
                        </div>
                    </li>

                    <li id="money">
                        <a class="fullwidth nopad" href="javascript:void(0);" onclick="moneydd()">
                            <i class="fa-solid fa-money-bill-wave fa-fw"></i><span>Currency</span>
                        </a>
                    </li>

                    <li>
                        <div id="money-dropdown" class="dropdowns">
                            <ul>
                                <li>
                                    <a class='fullwidtha' href="/currency/currency.html"><span>Overview</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/currency/coins.html"><span>Coins</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/currency/guild-coins.html"><span>Guild Coins</span></a>
                                </li>
                                <li>
                                    <a class='fullwidtha' href="/currency/fairy-essence.html"><span>Fairy Essence</span></a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li id="weapons">
                        <a class="fullwidth nopad" href="javascript:void(0);" onclick="weaponsdd()">
                            <i class="fa-solid fa-broom fa-fw"></i><span>Weapons</span>
                        </a>
                    </li>

                    <li>
                        <div id="weapons-dropdown" class="dropdowns">
                            <ul>
                                <li><a class='fullwidtha' href="/weapons/weapons.html"><span>Overview</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/obtain.html"><span>Obtaining Weapons</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/rarity.html"><span>Rarity & Titles</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/shards.html"><span>Synthetic Shards</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/fragments.html"><span>Legend Fragments</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/weapon-upgrades.html"><span>Weapon Upgrades</span></a></li>
                                <li><a class='fullwidtha' href="/weapons/star-pieces.html"><span>Star Pieces</span></a></li>
                            </ul>
                        </div>
                    </li>
        
                    <li>
                    <li>
                        <a class='fullwidth direlink' href="/masterworks-fair/masterworks-fair.html">
                            <i class="fa-solid fa-fire-burner fa-fw">
                            </i><span>Masterworks Fair</span></a>
                    </li>

                    <li>
                        <a class='fullwidth direlink' href="/susan/susan.html">
                            <i class="fa-solid fa-parachute-box fa-fw">
                            </i><span>Supply Drop Susan</span></a>
                    </li>

                    <li>
                        <a class='direlink' href="/levels/levels.html">
                            <i class="fa-solid fa-piggy-bank fa-fw">
                            </i><span>Levels & Rewards</span></a></li>

                    <li>
                        <a class='direlink' href="/achievements/achievements.html">
                            <i class="fa-solid fa-gem fa-fw">
                            </i><span>Achievements</span></a></li>

                

                </ul>
            </div>
      `;
    }
  }
  
  customElements.define('mobile-divs', dropdown2);



  