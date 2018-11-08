import { connect } from 'react-redux'
import CloudStoragePicker from '../components/asset/CloudStoragePicker'
import { getCloudFiles, clearCloudFiles } from '../actions/index'
import { change } from 'redux-form'

export default connect(
    state => ({
        blobs: Object.values(state.cloudStorage.blobs).map((fileObject, index) => ({
            id: index,
            container: fileObject.container,
            blobName: fileObject.blobName,
            value: false
        })),
        error: state.cloudStorage.error
    }),
    dispatch => ({
        resetCloudFiles: () => {
            dispatch(clearCloudFiles())
        },
        loadCloudFiles: () => {
            dispatch(getCloudFiles())
        },
        linkSetter: (newValue) => {
            dispatch(change('newAsset', 'contentUrls', newValue))
        }
    })
)(CloudStoragePicker)
