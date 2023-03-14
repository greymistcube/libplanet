window.BENCHMARK_DATA = {
  "lastUpdate": 1678783319169,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "03fcc72859324bb7bd5f9db0d9c41573e561299f",
          "message": "Merge tag '0.47.1' into port/0.47.1-to-0.48.1\n\nLibplanet 0.47.1",
          "timestamp": "2023-03-14T17:22:25+09:00",
          "tree_id": "c3d45cc6b68d2656a589d93c7acf4e48ca385b66",
          "url": "https://github.com/greymistcube/libplanet/commit/03fcc72859324bb7bd5f9db0d9c41573e561299f"
        },
        "date": 1678783307414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137565.83707865168,
            "unit": "ns",
            "range": "± 7610.021230922213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 125996.29787234042,
            "unit": "ns",
            "range": "± 20285.756798655282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257156.89583333334,
            "unit": "ns",
            "range": "± 39475.433842348924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231958.74137931035,
            "unit": "ns",
            "range": "± 10043.526768495505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3933239.0319148935,
            "unit": "ns",
            "range": "± 307281.392384045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11434685.776470589,
            "unit": "ns",
            "range": "± 1375786.4501773538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23856.242105263158,
            "unit": "ns",
            "range": "± 3528.9257834987584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60043.242105263154,
            "unit": "ns",
            "range": "± 9234.847894375458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59977.87368421053,
            "unit": "ns",
            "range": "± 4403.032111069442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130600.47894736842,
            "unit": "ns",
            "range": "± 19453.710685788472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8396.41489361702,
            "unit": "ns",
            "range": "± 1364.1399406311866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22179.184210526317,
            "unit": "ns",
            "range": "± 4160.9398929608615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5301725.558813202,
            "unit": "ns",
            "range": "± 438385.2195327556"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6472409.285714285,
            "unit": "ns",
            "range": "± 129383.61200636766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27067202.310344826,
            "unit": "ns",
            "range": "± 776944.4732162609"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7292055.366666666,
            "unit": "ns",
            "range": "± 750972.6969441586"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35596911.758064516,
            "unit": "ns",
            "range": "± 2737105.353319876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6876592.603860294,
            "unit": "ns",
            "range": "± 135370.13320983524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2030134.40625,
            "unit": "ns",
            "range": "± 40086.48488135572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1444618.4834558824,
            "unit": "ns",
            "range": "± 44669.54238522051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3063891.011240434,
            "unit": "ns",
            "range": "± 385842.19151101314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 896245.5606192129,
            "unit": "ns",
            "range": "± 19457.372895481793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756555.1731119792,
            "unit": "ns",
            "range": "± 12291.370487020253"
          }
        ]
      }
    ]
  }
}