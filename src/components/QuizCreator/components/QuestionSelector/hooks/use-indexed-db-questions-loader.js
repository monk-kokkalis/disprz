import {useContext, useEffect} from 'react';
import {Context} from '../../../context/Provider';
import {questionActions} from '../../../context/reducers/questions/index';
import DexieService from 'services/Dexie/DexieService';
import Option from 'models/Option';
import Question from 'models/Question';
function useIndexedDbQuestionsLoader() {
    const context = useContext(Context);
    const {questDispatch} = context;

    useEffect(function() {
        const dexie = new DexieService();
        (async function loadQuestions() {
            const res = await dexie.getAllQuestions();
            const questions = res.map(quest => {
                const options = quest.options.map(op => new Option({id: op.modelId, value: op.value}));
                const image = quest.image === undefined ? null : quest.image
                return new Question({
                    id: quest.modelId,
                    name: quest.name,
                    options,
                    image
                })
            });
            console.log(questions);
            questDispatch({
                type: questionActions.LOAD_QUESTIONS_FROM_INDEXED_DB,
                payload: {questions}
            })
        })()
    }, [questDispatch])
}

export default useIndexedDbQuestionsLoader;