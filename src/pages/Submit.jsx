import React, { useEffect } from "react";
import "./Submit.css"; // Подключение файла стилей

const Submit = () => {
  useEffect(() => {
    const amoformsScript = document.createElement("script");
    amoformsScript.id = "amoforms_script_1169062";
    amoformsScript.async = true;
    amoformsScript.charset = "utf-8";
    amoformsScript.src =
      "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1688983944";

    const amoformsInitScript = document.createElement("script");
    amoformsInitScript.innerHTML = `
      !function(a,m,o,c,r,m){
        a[o+c]=a[o+c]||{
          setMeta:function(p){
            this.params=(this.params||[]).concat([p])
          }
        };
        a[o+r]=a[o+r]||function(f){
          a[o+r].f=(a[o+r].f||[]).concat([f])
        };
        a[o+r]({id:"1169062",hash:"97386221d97b9e1facf06f93731fbf1b",locale:"ru"});
        a[o+m]=a[o+m]||function(f,k){
          a[o+m].f=(a[o+m].f||[]).concat([[f,k]])
        }
      }(window,0,"amo_forms_","params","load","loaded");
    `;

    document.body.appendChild(amoformsScript);
    document.body.appendChild(amoformsInitScript);

    return () => {
      amoformsScript.remove();
      amoformsInitScript.remove();
    };
  }, []);

  return <div></div>;
};

export default Submit;
