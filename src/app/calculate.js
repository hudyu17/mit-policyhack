'use server'
import { redirect } from "next/navigation";

export async function calculate(formData) {
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

    const interventions = 'item1,item2,item3,item2'

    const baselineArray = [65, 74, 66, 64, 56, 67, 73, 80, 85, 100] // join into one string
    const baselineData = baselineArray.join()

    const interventionArray = [63, 72, 69, 65, 56, 60, 65, 62, 58, 64]
    const interventionData = interventionArray.join()

    const saved = 400

    const queryString  = `interventions=${interventions}&evictions=${evictions}&baselineData=${baselineData}&interventionData=${interventionData}&saved=${saved}`
    
    redirect(`/results?${queryString}`)
}