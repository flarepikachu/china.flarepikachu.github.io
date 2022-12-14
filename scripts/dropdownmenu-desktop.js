class dropdown1 extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <ul>
  

          <li>
              <button class="dropdown-btn"><i class="fa-solid fa-hashtag fa-fw"></i></i>
              Patch Notes
              </button>
              <div class="dropdown-container dropdown-container-patch-notes">
              <a class='test' href="/patch-notes/illusion-vanguard-1-1-1_.html"><span>Illusion Vanguard Hotfix - 1.1.1</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard-1-1.html"><span>Illusion Vanguard Update - 1.1</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard-7.html"><span>Illusion Vanguard Update - 1.0.7</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard-6.html"><span>Illusion Vanguard Hotfix - 1.0.6</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard-5.html"><span>Illusion Vanguard Hotfix - 1.0.5</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard-4.html"><span>Illusion Vanguard Hotfix - 1.0.4</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard-3.html"><span>Illusion Vanguard Hotfix - 1.0.3</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard-2.html"><span>Illusion Vanguard Hotfix - 1.0.2</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard-1.html"><span>Illusion Vanguard Hotfix - 1.0.1</span></a>
              <a class='test' href="/patch-notes/illusion-vanguard.html"><span>Illusion Vanguard</span></a>
              </div>
          </li>
          <li><a class='direlink' href="/index.html">
              <i class="fa-solid fa-magnifying-glass fa-fw"></i>
              <span>Overview</span></a></li>
          <li><a class='direlink' href="/wave-defense/wave-defense.html">
              <i class="fa-solid fa-house-tsunami fa-fw"></i>
              <span>Wave Defense</span></a></li>
          
          <li>
              <button class="dropdown-btn">
              <i class="fa-solid fa-circle-info fa-fw"></i>
              ???????????????
              </button>
              <div class="dropdown-container dropdown-container-classes">
                <button class="dropdown-btn ul">
                ??????
                </button>
                <div class="dropdown-container dropdown-container-class dropdown-container-mage">
                <a class='test' href="/skills/mage/pyromancer.html"><span>????????????</span></a>
                <a class='test' href="/skills/mage/cryomancer.html"><span>????????????</span></a>
                <a class='test' href="/skills/mage/aquamancer.html"><span>????????????</span></a>
                </div>
                <button class="dropdown-btn ul">
                ?????????
                </button>
                <div class="dropdown-container dropdown-container-class dropdown-container-paladin">
                <a class='test' href="/skills/paladin/avenger.html"><span>?????????</span></a>
                <a class='test' href="/skills/paladin/crusader.html"><span>?????????</span></a>
                <a class='test' href="/skills/paladin/protector.html"><span>?????????</span></a>
                </div>
                <button class="dropdown-btn ul">
                ??????
                </button>
                <div class="dropdown-container dropdown-container-class dropdown-container-warrior">
                <a class='test' href="/skills/warrior/berserker.html"><span>?????????</span></a>
                <a class='test' href="/skills/warrior/defender.html"><span>?????????</span></a>
                <a class='test' href="/skills/warrior/revenant.html"><span>????????????</span></a>
                </div>
                <button class="dropdown-btn ul">
                ??????
                </button>
                <div class="dropdown-container dropdown-container-class dropdown-container-shaman">
                <a class='test' href="/skills/shaman/thunderlord.html"><span>????????????</span></a>
                <a class='test' href="/skills/shaman/spiritguard.html"><span>????????????</span></a>
                <a class='test' href="/skills/shaman/earthwarden.html"><span>???????????????</span></a>
                </div>
                <button class="dropdown-btn ul">
                ??????
                </button>
                <div class="dropdown-container dropdown-container-class dropdown-container-rogue">
                <a class='test' href="/skills/rogue/assassin.html"><span>??????</span></a>
                <a class='test' href="/skills/rogue/vindicator.html"><span>?????????</span></a>
                <a class='test' href="/skills/rogue/apothecary.html"><span>?????????</span></a>
                </div>
              </div>
          </li>
          <li><a class='direlink' href="/titles.html">
              <i class="fa-solid fa-trophy fa-fw"></i>
              <span>Title Information <span class="bold red">NEW!</span></span></a></li>
          <li>
              <button class="dropdown-btn">
              <i class="fa-solid fa-place-of-worship fa-fw"></i>
              Guilds
              </button>
              <div class="dropdown-container dropdown-container-guilds">
              <a class='test' href="/guilds/guilds.html"><span>Overview</span></a>
              <!--<a class='test' href="/guilds/commands.html"><span>Guild Commands</span></a>
              <a class='test' href="/guilds/chat.html"><span>Guild Chat</span></a>-->
              <a class='test' href="/guilds/levels.html"><span>Guild Levels and EXP</span></a>
              <!--<a class='test' href="/guilds/bank.html"><span>Guild Bank</span></a>
              <a class='test' href="/guilds/upgrades.html"><span>Guild Upgrades</span></a>
              <a class='test' href="/guilds/settings.html"><span>Guild Settings and Permissions</span></a>-->
              </div>
          </li>
          <li>
              <button class="dropdown-btn"><i class="fa-solid fa-money-bill-wave fa-fw"></i></i>
              Currency
              </button>
              <div class="dropdown-container dropdown-container-currency">
              <a class='test' href="/currency/currency.html"><span>Overview</span></a>
              <a class='test' href="/currency/coins.html"><span>Coins</span></a>
              <a class='test' href="/currency/guild-coins.html"><span>Guild Coins</span></a>
              <a class='test' href="/currency/fairy-essence.html"><span>Fairy Essence</span></a>
              </div>
          </li>
          <li>
            <button class="dropdown-btn"><i class="fa-solid fa-broom fa-fw"></i></i>
            Weapons
              </button>
              <div class="dropdown-container dropdown-container-weapons">
              <a class='test' href="/weapons/weapons.html"><span>Overview</span></a>
              <a class='test' href="/weapons/obtain.html"><span>Obtaining Weapons</span></a>
              <a class='test' href="/weapons/rarity.html"><span>Rarity & Titles</span></a>
              <a class='test' href="/weapons/shards.html"><span>Synthetic Shards</span></a>
              <a class='test' href="/weapons/fragments.html"><span>Legend Fragments</span></a>
              <a class='test' href="/weapons/weapon-upgrades.html"><span>Weapon Upgrades</span></a>
              <a class='test' href="/weapons/star-pieces.html"><span>Star Pieces</span></a>
              </div>
          </li>

          <li><a class='direlink' href="/masterworks-fair/masterworks-fair.html">
              <i class="fa-solid fa-fire-burner fa-fw"></i>
              <span>Masterworks Fair</span></a>
          </li>

          <li><a class='direlink' href="/susan/susan.html">
              <i class="fa-solid fa-parachute-box fa-fw"></i>
              <span>Supply Drop Susan</span></a>
          </li>

          <li><a class='direlink' href="/levels/levels.html">
              <i class="fa-solid fa-piggy-bank fa-fw"></i>
              <span>Levels & Rewards</span></a></li>

          <li><a class='direlink' href="/achievements/achievements.html">
              <i class="fa-solid fa-gem fa-fw"></i>
              <span>Achievements</span></a></li>
      </ul>
      `;
    }
  }
  
  customElements.define('dropdown-component', dropdown1);



  