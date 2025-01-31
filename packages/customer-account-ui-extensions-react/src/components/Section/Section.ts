import {Section as BaseSection} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SectionProps = ReactPropsFromRemoteComponentType<
  typeof BaseSection
>;

export const Section = createRemoteReactComponent(BaseSection);
