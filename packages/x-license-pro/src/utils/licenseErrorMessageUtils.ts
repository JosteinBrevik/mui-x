function showError(message: string[]) {
  console.error(
    [
      '*************************************************************',
      '',
      ...message,
      '',
      '*************************************************************',
    ].join('\n'),
  );
}

export function showInvalidLicenseKeyError() {
  showError([
    'MUI: Invalid license key.',
    '',
    "Your MUI X license key format isn't valid. It could be because the license key is missing a character or has a typo.",
    '',
    'To solve the issue, you need to double check that `setLicenseKey()` is called with the right argument',
    'Please check the license key installation https://mui.com/r/x-license-key-installation.',
  ]);
}

export function showLicenseKeyPlanMismatchError() {
  showError([
    'MUI: License key plan mismatch.',
    '',
    'Your use of MUI X is not compatible with the plan of your license key. The feature you are trying to use is not included in the plan of your license key. This happens if you try to use `DataGridPremium` with a license key for the Pro plan.',
    '',
    'To solve the issue, you can upgrade your plan from Pro to Premium at https://mui.com/r/x-get-license?scope=premium.',
    "Of if you didn't intend to use Premium features, you can replace the import of `@mui/x-data-grid-premium` with `@mui/x-data-grid-pro`.",
  ]);
}

export function showMissingLicenseKeyError({
  plan,
  packageName,
}: {
  plan: string;
  packageName: string;
}) {
  showError([
    'MUI: Missing license key.',
    '',
    `The license key is missing. You might not be allowed to use \`${packageName}\` which is part of MUI X ${plan}.`,
    '',
    'To solve the issue, you can check the free trial conditions: https://mui.com/r/x-license-trial.',
    'If you are eligible no actions are required. If you are not eligible to the free trial, you need to purchase a license https://mui.com/r/x-get-license or stop using the software immediately.',
  ]);
}

export function showExpiredPackageVersionError({ packageName }: { packageName: string }) {
  showError([
    'MUI: Expired package version.',
    '',
    `You have installed a version of \`${packageName}\` that is outside of the maintenance plan of your license key. By default, commercial licenses provide access to new versions released during the first year after the purchase.`,
    '',
    'To solve the issue, you can renew your license https://mui.com/r/x-get-license or install an older version of the npm package that is compatible with your license key.',
  ]);
}

export function showExpiredAnnualLicenseKeyError({ plan }: { plan: string }) {
  showError([
    'MUI: Expired license key.',
    '',
    `Your annual license key to use MUI X ${plan}'s on non-production environments is expired. If you are seeing this development console message, you might be close to breach the license terms by making direct or indirect changes to the frontend of an app that render a MUI X ${plan} component (more details in https://mui.com/r/x-license-annual).`,
    '',
    'To solve the problem you can either:',
    '',
    '- Renew your license https://mui.com/r/x-get-license and use the new key',
    `- Stop making changes to code depending directly or indirectly on MUI X ${plan}'s APIs`,
    '',
    'Note that your license is perpetual in production environments with any version released before your license term ends.',
  ]);
}
