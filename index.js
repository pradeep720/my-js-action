const core = require('@actions/core')
const github = require('@actions/github')

try {
    const nameToGreet = core.getInput('who-to-greet');
    


} catch (error) {
    core.setFailed(error.message);
}