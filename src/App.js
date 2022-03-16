import "./Assets/Styles/reset.css";
import "./Assets/Styles/App.css";
import { useEffect, useState } from "react";

import QueryService from "./Services/QueryService";

import Status from "./Components/Header/Status";

import { ReactComponent as NeteroSVG } from "./Assets/Images/netero.svg";
import FztnPNG from "./Assets/Images/fztn.png";
import Discord from "./Assets/Images/discord.png";

import Globe from "./Assets/Images/globe.png";
import Dirt from "./Assets/Images/dirt.png";
import Netherrack from "./Assets/Images/netherrack.png";
import Endstone from "./Assets/Images/end_stone.png";
import Compass from "./Assets/Images/compass.png";
import SlimeBall from "./Assets/Images/slime_ball.png";
import BookAndQuill from "./Assets/Images/writable_book.png";
import FilledMap from "./Assets/Images/filled_map.png";
import FishingRod from "./Assets/Images/fishing_rod.png";
import Haste from "./Assets/Images/haste.png";
import Speaker from "./Assets/Images/speaker.png";

import Terralith_1 from "./Assets/Images/terralith_1.png";
import Incendium_1 from "./Assets/Images/incendium_1.png";
import Nullscape_3 from "./Assets/Images/nullscape_3.png";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    QueryService.getStatus(
      (res) => {
        setStatus(res);
      },
      (err) => {
        setStatus({ error: err });
      }
    );
  }, []);

  useEffect(() => {
    if (status !== null) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [status]);

  return (
    <div id="App">
      <header>
        <div id="brand">
          <NeteroSVG />
          <img src={FztnPNG} alt=""/>
        </div>

        <nav>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="http://fztn.gg:8100">
                <img src={FilledMap} alt=""/>
                Map
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://discord.gg/BJPcyvsFZf">
                <img src={Discord} alt=""/>
                Discord
              </a>
            </li>
          </ul>
        </nav>

        <Status loading={loading} status={status} />
      </header>

      <div className="worldgen_title">
        <img src={Globe} alt=""/>
        <span>Custom WorldGen</span>
      </div>

      <div className="worldgen_container">
        <div className="worldgen_card" id="terralith">
          <div>
            <img src={Dirt} alt=""/>
            <span>Terralith</span>
          </div>
          <img src={Terralith_1} alt=""/>
        </div>

        <div className="worldgen_card" id="incendium">
          <div>
            <img src={Netherrack} alt=""/>
            <span>Incendium</span>
          </div>
          <img src={Incendium_1} alt=""/>
        </div>

        <div className="worldgen_card" id="nullscape">
          <div>
            <img src={Endstone} alt=""/>
            <span>Nullscape</span>
          </div>
          <img src={Nullscape_3} alt=""/>
        </div>
      </div>

      <div className="plugin_title">
        <img src={Compass} alt=""/>
        <span>Plugins</span>
      </div>

      <div className="plugin_container">
        <div className="plugin_card">
          <div className="plugin_head">
            <img src={SlimeBall} alt=""/>
            <span>SlimeFun</span>
          </div>
          <div className="plugin_text">
            <span>Like a modded, but vanilla</span>
          </div>
        </div>
        <div className="plugin_card">
          <div className="plugin_head">
            <img src={BookAndQuill} alt=""/>
            <span>CoreProtect</span>
          </div>
          <div className="plugin_text">
            <span>Logs, Rollback, Admin Stuff only</span>
          </div>
        </div>
        <div className="plugin_card">
          <div className="plugin_head">
            <img src={FilledMap} alt=""/>
            <span>BlueMap</span>
          </div>
          <div className="plugin_text">
            <span>Provide a nice 3D Map</span>
          </div>
        </div>
        <div className="plugin_card">
          <div className="plugin_head">
            <img src={FishingRod} alt=""/>
            <span>GrapplinkHook</span>
          </div>
          <div className="plugin_text">
            <span>Move as a ninja</span>
          </div>
        </div>
        <div className="plugin_card">
          <div className="plugin_head">
            <img src={Haste} alt=""/>
            <span>AureliumSkills</span>
          </div>
          <div className="plugin_text">
            <span>Progress through various skills</span>
          </div>
        </div>
      </div>

      <div className="voicechat_title">
        <img src={Speaker} alt=""/>
        <span>VoiceChat Mod (optional)</span>
      </div>

      <div className="voicechat_container">
        <span>
          Simple Voice Chat grants an in game voice chat with nice UIs and
          customization.
        </span>
        <span>
          This mod is only client-side as we run the plugin version on the
          server, so it's completely optional
        </span>
        <span>
          You can download either forge or fabric version on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat"
          >
            CurseForge
          </a>
        </span>
      </div>
    </div>
  );
};

export default App;
