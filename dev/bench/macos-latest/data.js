window.BENCHMARK_DATA = {
  "lastUpdate": 1675700863211,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong@minhee.org",
            "name": "Hong Minhee (洪 民憙)",
            "username": "dahlia"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa15924beb36a7ebe3d92052f5c20af2a235916c",
          "message": "Merge pull request #2788 from dahlia/0.48-maintenance",
          "timestamp": "2023-02-06T19:09:15+09:00",
          "tree_id": "756adedd8cd6f72fe1983dfa077c437153ef7b89",
          "url": "https://github.com/greymistcube/libplanet/commit/fa15924beb36a7ebe3d92052f5c20af2a235916c"
        },
        "date": 1675700845594,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 130304.83673469388,
            "unit": "ns",
            "range": "± 11575.708813276646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111310.05376344085,
            "unit": "ns",
            "range": "± 18792.74491622255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226105.0206185567,
            "unit": "ns",
            "range": "± 23355.20577318692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203496.72916666666,
            "unit": "ns",
            "range": "± 16593.301218757028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3692689.970588235,
            "unit": "ns",
            "range": "± 115889.34148038241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9473035.261904761,
            "unit": "ns",
            "range": "± 344707.1006500149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19967.844444444443,
            "unit": "ns",
            "range": "± 2547.8956547836524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56922.30612244898,
            "unit": "ns",
            "range": "± 9061.998350888645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43183.02127659575,
            "unit": "ns",
            "range": "± 4386.862228814145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101021.27173913043,
            "unit": "ns",
            "range": "± 16530.299143104192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5370,
            "unit": "ns",
            "range": "± 955.1224390428791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19990.52688172043,
            "unit": "ns",
            "range": "± 3311.033106184198"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4807399.718290441,
            "unit": "ns",
            "range": "± 94354.98910099601"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7438790.142857143,
            "unit": "ns",
            "range": "± 205559.85792152994"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27533697.157894738,
            "unit": "ns",
            "range": "± 1380435.2199220655"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7363182.306818182,
            "unit": "ns",
            "range": "± 987652.9392998071"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30838847.06451613,
            "unit": "ns",
            "range": "± 925548.3443621205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089425.830915178,
            "unit": "ns",
            "range": "± 74063.35704588775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1904605.8229549632,
            "unit": "ns",
            "range": "± 56977.29932852596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212795.7599051339,
            "unit": "ns",
            "range": "± 6742.71660117597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2393027.096454327,
            "unit": "ns",
            "range": "± 29248.725841508705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 750914.151968149,
            "unit": "ns",
            "range": "± 4064.4273025631755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693693.9665527344,
            "unit": "ns",
            "range": "± 2737.8819526322595"
          }
        ]
      }
    ]
  }
}