import { Template } from "../index";

const html = `<html>
  <head>
    <style type="text/css">
      .warning {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Madame, Monsieur,</p>

    <p>Vous venez de procéder à la transmission aux services du ministre chargé du travail de vos indicateurs et de votre niveau de résultat en matière d’écart de rémunération entre les femmes et les hommes pour l'année {{anneeIndicateur}} conformément aux dispositions de l’article D.1142-5 du code du travail. L’administration du travail accuse réception par le présent message de votre due transmission. Cet accusé réception ne vaut pas contrôle de conformité de vos déclarations.</p>

    <p>
      En cas d’erreur de saisie, vous pouvez à tout moment corriger les informations déclarées, en utilisant le lien spécifique unique suivant : <a href="https://index-egapro.travail.gouv.fr/simulateur/{{id}}">https://index-egapro.travail.gouv.fr/simulateur/{{id}}</a> attaché à votre déclaration.<br />
      <span class="warning">Attention : ce lien ne doit pas être utilisé pour une nouvelle déclaration. Il est rattaché exclusivement à {{companyName}} pour l'année {{anneeIndicateur}}.</span>
    </p>
    <p>
      Pour tout renseignement utile, vous êtes invité à prendre contact avec les services de la DIRECCTE dont le siège de votre entreprise dépend.
    </p>

    <p>
      Veuillez agréer, Madame, Monsieur, nos salutations distinguées,
      Les services de l’administration du travail.
    </p>
    <p>
     <span class="warning">Merci de ne pas répondre à ce message qui a été généré automatiquement par une boîte ne pouvant traiter les demandes.</span>
    </p>
  </body>
</html>
`;

const text = `Madame, Monsieur,

Vous venez de procéder à la transmission aux services du ministre chargé du travail de vos indicateurs et de votre niveau de résultat en matière d’écart de rémunération entre les femmes et les hommes pour l'année {{anneeIndicateur}} conformément aux dispositions de l’article D.1142-5 du code du travail. L’administration du travail accuse réception par le présent message de votre due transmission. Cet accusé réception ne vaut pas contrôle de conformité de vos déclarations.

En cas d’erreur de saisie, vous pouvez à tout moment corriger les informations déclarées, en utilisant le lien spécifique unique suivant : https://index-egapro.travail.gouv.fr/simulateur/{{id}} attaché à votre déclaration.
Attention : ce lien ne doit pas être utilisé pour une nouvelle déclaration. Il est rattaché exclusivement à {{companyName}} pour l'année {{anneeIndicateur}}.

Pour tout renseignement utile, vous êtes invité à prendre contact avec les services de la DIRECCTE dont le siège de votre entreprise dépend.

Veuillez agréer, Madame, Monsieur, nos salutations distinguées,
Les services de l’administration du travail.

Merci de ne pas répondre à ce message qui a été généré automatiquement par une boîte ne pouvant traiter les demandes.
`;

const template: Template = {
  html,
  text,
};

export default template;
