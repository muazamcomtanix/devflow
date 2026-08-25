import { Router } from 'express';

const router = Router();

/**
 * GET /api/v1/health
 *
 * Public health check endpoint.
 * Used by load balancers, uptime monitors, and CI pipelines to
 * verify the API is reachable before running tests or deployments.
 */
router.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'DevFlow API is running',
    timestamp: new Date().toISOString(),
  });
});

export default router;
