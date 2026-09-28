export function onRequestGet({ env }) {
  const key = env.AMAP_JS_API_KEY;
  const securityJsCode = env.AMAP_SECURITY_JS_CODE;

  if (!key || !securityJsCode) {
    return Response.json(
      { error: 'Map service configuration is missing.' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  return Response.json(
    { key, securityJsCode },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}

