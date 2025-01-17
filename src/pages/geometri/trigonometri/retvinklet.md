---
layout: 'layout:ShapeCalculatorLayout'
title: 'Trigonometri i retvinklede trekanter'
description: 'En trigonometri beregner der udregner alle sider og vinkler i en retvinklet trekant ved hjælp af trigonometri og pythagoras'
calculator:
  {
    calculations:
      [
        {
          if: 'A',
          calculations: [{ name: 'A', calc: 'A', entered: true }],
          checks:
            [
              {
                message: 'Vinklerne (A eller B) må ikke være større end eller lig med 90°',
                check: 'A >= 90',
              },
            ],
        },
        {
          if: 'B',
          calculations: [{ name: 'B', calc: 'B', entered: true }],
          checks:
            [
              {
                message: 'Vinklerne (A eller B) må ikke være større end eller lig med 90°',
                check: 'B >= 90',
              },
            ],
        },
        { if: 'a', calculations: [{ name: 'a', calc: 'a', entered: true }] },
        { if: 'b', calculations: [{ name: 'b', calc: 'b', entered: true }] },
        { if: 'c', calculations: [{ name: 'c', calc: 'c', entered: true }] },
        {
          if: 'a && b',
          calculations:
            [
              { name: 'A', calc: 'atan(a / b)' },
              { name: 'B', calc: 'atan(b / a)' },
              { name: 'c', calc: 'sqrt(a^2 + b^2)' },
            ],
        },
        {
          if: 'a && c',
          calculations:
            [
              { name: 'A', calc: 'asin(a / c)' },
              { name: 'B', calc: 'acos(a / c)' },
              { name: 'b', calc: 'sqrt(c^2 - a^2)' },
            ],
          checks:
            [
              {
                message: 'Kateterne (a eller b) må ikke være større end eller lig med hypotenusen (c)',
                check: 'c <= a',
              },
            ],
        },
        {
          if: 'a && A',
          calculations:
            [
              { name: 'B', calc: '180 - C - A' },
              { name: 'b', calc: 'a / tan(A)' },
              { name: 'c', calc: 'a / sin(A)' },
            ],
        },
        {
          if: 'a && B',
          calculations:
            [
              { name: 'A', calc: '180 - C - B' },
              { name: 'b', calc: 'a * tan(B)' },
              { name: 'c', calc: 'a / cos(B)' },
            ],
        },
        {
          if: 'b && c',
          calculations:
            [
              { name: 'A', calc: 'acos(b / c)' },
              { name: 'B', calc: 'asin(b / c)' },
              { name: 'a', calc: 'sqrt(c^2 - b^2)' },
            ],
          checks:
            [
              {
                message: 'Kateterne (a eller b) må ikke være større end eller lig med hypotenusen (c)',
                check: 'c <= b',
              },
            ],
        },
        {
          if: 'b && A',
          calculations:
            [
              { name: 'B', calc: '180 - C - A' },
              { name: 'a', calc: 'b * tan(A)' },
              { name: 'c', calc: 'b / cos(A)' },
            ],
        },
        {
          if: 'b && B',
          calculations:
            [
              { name: 'A', calc: '180 - C - B' },
              { name: 'a', calc: 'b / tan(B)' },
              { name: 'c', calc: 'b / sin(B)' },
            ],
        },
        {
          if: 'c && A',
          calculations:
            [
              { name: 'B', calc: '180 - C - A' },
              { name: 'a', calc: 'c * sin(A)' },
              { name: 'b', calc: 'c * cos(A)' },
            ],
        },
        {
          if: 'c && B',
          calculations:
            [
              { name: 'A', calc: '180 - C - B' },
              { name: 'a', calc: 'c * cos(B)' },
              { name: 'b', calc: 'c * sin(B)' },
            ],
        },
        { calculations: [{ name: 'Areal', calc: '1/2 * a * b' }] },
      ],
    event: true,
  }
setup: |
  import Triangle from '@components/Calculators/Custom/Trigonometri/Retvinklet.svelte'
---

<Triangle client:load />
