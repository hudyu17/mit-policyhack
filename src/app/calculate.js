export const calculate = (formData) => {
    console.log(formData)

    // FormData {
    //     [Symbol(state)]: [
    //       {
    //         name: '$ACTION_ID_cf301d91caea549091cd80a7dc728aeadd5187e6',
    //         value: ''
    //       },
    //       { name: 'budget', value: '323' },
    //       { name: 'state', value: 'New York' },
    //       { name: 'population', value: '12' },
    //       { name: 'consent', value: 'on' },
    //       { name: 'moratorium', value: 'on' }
    //     ]
    //  }

    const lookupState = {
        'New York': 3,
        'Colorado': 4,
    }

    const budget = formData.get('budget')
    const state = formData.get('state')
    const population = formData.get('population')
    const consent = formData.get('consent')
    const test = formData.get('no-exist')

    // console.log('test', test) // null

    let evictions;
    if (budget > 300) {
        evictions = 1 + lookupState[state]
    } else {
        evictions = 1000 + lookupState[state]
    }

    return evictions
}