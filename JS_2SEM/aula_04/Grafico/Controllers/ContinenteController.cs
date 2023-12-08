using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using App.Context;
using App.Models;

namespace Grafico.Controllers
{
    public class ContinenteController : Controller
    {
        private readonly AppDbContext _context;

        public ContinenteController(AppDbContext context)
        {
            _context = context;
        }

        // GET: Continente
        public IActionResult Index()
        {
            return _context.Continentes != null ?
                        View(_context.Continentes.ToList()) :
                        Problem("Entity set 'AppDbContext.Continentes'  is null.");
        }

        // GET: Continente/Details/5
        public IActionResult Details(int? id)
        {
            if (id == null || _context.Continentes == null)
            {
                return NotFound();
            }

            var continente = _context.Continentes
                .FirstOrDefault(m => m.continenteID == id);
            if (continente == null)
            {
                return NotFound();
            }

            return View(continente);
        }

        // GET: Continente/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Continente/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Continente continente)
        {
            _context.Add(continente);
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        // GET: Continente/Edit/5
        public IActionResult Edit(int? id)
        {
            if (id == null || _context.Continentes == null)
            {
                return NotFound();
            }

            var continente = _context.Continentes.Find(id);
            if (continente == null)
            {
                return NotFound();
            }
            return View(continente);
        }

        // POST: Continente/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, Continente continente)
        {
            if (id != continente.continenteID)
            {
                return NotFound();
            }

            try
            {
                _context.Update(continente);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContinenteExists(continente.continenteID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(Index));

        }

        // GET: Continente/Delete/5
        public IActionResult Delete(int? id)
        {
            if (id == null || _context.Continentes == null)
            {
                return NotFound();
            }

            var continente = _context.Continentes
                .FirstOrDefault(m => m.continenteID == id);
            if (continente == null)
            {
                return NotFound();
            }

            return View(continente);
        }

        // POST: Continente/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            if (_context.Continentes == null)
            {
                return Problem("Entity set 'AppDbContext.Continentes'  is null.");
            }
            var continente = _context.Continentes.Find(id);
            if (continente != null)
            {
                _context.Continentes.Remove(continente);
            }

            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        private bool ContinenteExists(int id)
        {
            return (_context.Continentes?.Any(e => e.continenteID == id)).GetValueOrDefault();
        }
    }
}
