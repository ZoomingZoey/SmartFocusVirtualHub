
import {
  Button,
  Form,
  Row,
  Col
} from 'react-bootstrap';

import { useState, useEffect } from "react";
import { capitaliseString } from '../lib/helpers';

const FilterSelection = ({ contentFilterOptions, clusterFilterOptions, contentTypeDefault, clusterTypeDefault, onChange }) => {
  const contentTypeIndex = contentFilterOptions.findIndex(v => v === capitaliseString(contentTypeDefault));
  const clusterTypeIndex = clusterFilterOptions.findIndex(v => v === capitaliseString(clusterTypeDefault));

  const [contentFilter, setContentFilter] = useState(contentFilterOptions[contentTypeIndex > -1 ? contentTypeIndex : 0]);
  const [clusterFilter, setClusterFilter] = useState(clusterFilterOptions[clusterTypeIndex > -1 ? clusterTypeIndex : 0]);

  const handleContentTypeChange = (e) => {
    setContentFilter(e.target.value);
    onChange({
      contentType: e.target.value,
      cluster: clusterFilter
    });
  }

  const handleClusterChange = (e) => {
    setClusterFilter(e.target.value);
    onChange({
      contentType: contentFilter,
      cluster: e.target.value
    });
  }

  const handleClear = () => {
    setContentFilter(contentFilterOptions[0]);
    setClusterFilter(clusterFilterOptions[0]);
    onChange({
      contentType: contentFilterOptions[0],
      cluster: clusterFilterOptions[0]
    });
  }

  useEffect(() => {
    onChange({
      contentType: contentFilter,
      cluster: clusterFilter
    });
  }, []);

  return (
    <div className='d-flex justify-content-center my-4'>
      <Form>
        <Row className="align-items-center">
          <Col xs={12} md="auto">
            <Form.Label htmlFor="ContentTypeFormSelect">
              Content Type
            </Form.Label>
            <Form.Select
              value={contentFilter}
              onChange={handleContentTypeChange}
              className='mb-2'
              id='ContentTypeFormSelect'
            >
              {contentFilterOptions.map((option, index) => (<option key={index}>{option}</option>))}
            </Form.Select>
          </Col>
          <Col xs={12} md="auto">
            <Form.Label htmlFor="ClusterFormSelect">
              Cluster
            </Form.Label>
            <Form.Select
              value={clusterFilter}
              onChange={handleClusterChange}
              className='mb-2'
              id='ClusterFormSelect'
            >
              {clusterFilterOptions.map((option, index) => (<option key={index}>{option}</option>))}
            </Form.Select>
          </Col>
          <Col xs={12} md="auto" className='align-self-end'>
            <Form.Label htmlFor="inlineFormBtn" visuallyHidden>
              Clear all applied filters
            </Form.Label>
            <div className='d-grid'>
              <Button
                type="button"
                variant="danger"
                id='inlineFormBtn'
                className='mb-2'
                disabled={contentFilter === contentFilterOptions[0] && clusterFilter === clusterFilterOptions[0]}
                onClick={handleClear}
              >
                Clear
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
 
export default FilterSelection;