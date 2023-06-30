# Specifications

## Purpose

Ce bot permet de gérer des projets, affecter des users à ces projets, gérer des tâches.

On peut également lier un projet du bot, à un projet GitHub et ainsi référencer les tâches dans les commits, être
notifié quand une issue, pr est ouverte, quand une release est publiée.

Un projet peut être publique ou privé. Dans le premier cas il apparaît donc dans la liste des projets et peut recevoir
des étoiles, des personnes peuvent également s'abonner à ce projet pour recevoir des notifications. Dans le second cas
le projet n'est accessible que par les membres du projet.

Pour ce qui est des notifications, quand on s'abonne on reçoit tout (pas de filtre), par contre le propriétaire du
projet peut définir ce qui est envoyé : releases, security notices, articles, ... Pour les notifications GitHub, chaque
type de notification peut être redirigé vers un channel particulier mais aucune ne peut être transformé en notification
générale envoyée aux abonnés (hormis les releases). Par défaut tout le monde reçoit les releases notes du bot sur le
channel par défaut (ce peut être désactivé).

Il n'y a pas d'interface web disponible (hormis la page de status), tout passe par le bot via les commandes.

## Commands

- `status`: status of the bot -> ping + status + url status + nb projets + nb tâche + nb user
- `doc|help`: show url to GitHub doc of the bot
- `credits`: show credits -> author, git, ...
- `settings`: show a menu to define general settings for the server or private channel
- `projects search=<string> [page=<int>=0]`: look for projects
- `my`: list my projects
- `current [id=<int>]`: show or set current project. Show also a menu to define settings of project
- `tasks`: list tasks of current project
- `task id=<int> [action=<create|delete>]`: create, delete or show a task. Show also a menu to update task
- `subscribe [id=int]`: subscribe a server to a project, or list all subscriptions
