window.BENCHMARK_DATA = {
  "lastUpdate": 1678786031897,
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
          "id": "b88179351e1e8ac37239d812c80ecab67235fea1",
          "message": "Changelog",
          "timestamp": "2023-03-14T18:16:19+09:00",
          "tree_id": "ff7fb2fc6be7e74a14b2c5236392739d907b0fff",
          "url": "https://github.com/greymistcube/libplanet/commit/b88179351e1e8ac37239d812c80ecab67235fea1"
        },
        "date": 1678786024824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 94645.57731958762,
            "unit": "ns",
            "range": "± 9152.583666233097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202761.41379310345,
            "unit": "ns",
            "range": "± 8907.023095415354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173255.96296296295,
            "unit": "ns",
            "range": "± 4740.6308366445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3880510.466666667,
            "unit": "ns",
            "range": "± 60053.62850684457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9764946.733333332,
            "unit": "ns",
            "range": "± 148756.37599994862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18508.277777777777,
            "unit": "ns",
            "range": "± 1208.9770866852016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51719.98901098901,
            "unit": "ns",
            "range": "± 3712.9886359897487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39679.57142857143,
            "unit": "ns",
            "range": "± 596.371814105379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93454.36458333333,
            "unit": "ns",
            "range": "± 15977.49449834445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6019.111111111111,
            "unit": "ns",
            "range": "± 279.8788396334242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16369.764705882353,
            "unit": "ns",
            "range": "± 903.6705922047514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5782070.762834822,
            "unit": "ns",
            "range": "± 32392.675305571946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1840981.8391462055,
            "unit": "ns",
            "range": "± 4622.772979530335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357466.8278645833,
            "unit": "ns",
            "range": "± 3047.808106070907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2619057.9756510416,
            "unit": "ns",
            "range": "± 3703.420312535006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834991.0364815848,
            "unit": "ns",
            "range": "± 1122.312169638949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763982.8908203125,
            "unit": "ns",
            "range": "± 469.4248218806501"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 107611.68181818182,
            "unit": "ns",
            "range": "± 2566.6538413970907"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5176478.68108259,
            "unit": "ns",
            "range": "± 75485.41164291583"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6162010.307692308,
            "unit": "ns",
            "range": "± 84174.45831365616"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26695855.157894738,
            "unit": "ns",
            "range": "± 574470.2490824107"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6771096.571428572,
            "unit": "ns",
            "range": "± 59564.18115937474"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30333812.466666665,
            "unit": "ns",
            "range": "± 551784.8299818725"
          }
        ]
      }
    ]
  }
}