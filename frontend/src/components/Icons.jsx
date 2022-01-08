import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';

function Icons(props) {
    let status = props.props
    return (
        <div>
            {status === 'Clouds' &&
                <CloudIcon style={{'fontSize':'3em', 'marginRight':'.5em'}}/>
            }
            {status === 'Rain' &&
                <GrainIcon style={{'fontSize':'3em', 'marginRight':'.5em'}}/>
            }
            {status === 'Snow' &&
                <AcUnitIcon style={{'fontSize':'3em', 'marginRight':'.5em'}}/>
            }
            {status !== 'Snow' && status !== 'Rain' && status !== 'Clouds'?
                <WbSunnyIcon style={{'fontSize':'3em', 'marginRight':'.5em'}}/>
                :null
            }
        </div>
    )
}

export default Icons
