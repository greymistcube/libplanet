window.BENCHMARK_DATA = {
  "lastUpdate": 1678786296872,
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
      },
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
          "id": "de5410f90bb05b09dd4395beaf41218dcadda201",
          "message": "Porting changelog",
          "timestamp": "2023-03-14T18:14:03+09:00",
          "tree_id": "bb1eb97752999e8ef0a439815ec07e804f395596",
          "url": "https://github.com/greymistcube/libplanet/commit/de5410f90bb05b09dd4395beaf41218dcadda201"
        },
        "date": 1678786287977,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113745.71276595745,
            "unit": "ns",
            "range": "± 13743.375246811607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233929.8105263158,
            "unit": "ns",
            "range": "± 18443.34586187493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206177.96666666667,
            "unit": "ns",
            "range": "± 17125.80506592843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4512032.202702703,
            "unit": "ns",
            "range": "± 225930.46837528006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11947466.709677419,
            "unit": "ns",
            "range": "± 356653.80014716357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24784.040404040403,
            "unit": "ns",
            "range": "± 6708.828940541926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62747.42105263158,
            "unit": "ns",
            "range": "± 7906.484931356338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53935.0618556701,
            "unit": "ns",
            "range": "± 8964.979872879472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120157.38541666667,
            "unit": "ns",
            "range": "± 21985.39909570119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12139.826530612245,
            "unit": "ns",
            "range": "± 5899.842702822825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22958.666666666668,
            "unit": "ns",
            "range": "± 6912.866790652495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6960530.341711956,
            "unit": "ns",
            "range": "± 170725.33857088553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2326779.7705729166,
            "unit": "ns",
            "range": "± 42495.468332941964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1543269.3634765625,
            "unit": "ns",
            "range": "± 34868.156399207845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3133613.984375,
            "unit": "ns",
            "range": "± 59740.9626737852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977826.7849839154,
            "unit": "ns",
            "range": "± 19626.047601774964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 937085.8432617188,
            "unit": "ns",
            "range": "± 21846.22721621177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 127211.59375,
            "unit": "ns",
            "range": "± 11816.67608939353"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5960847.491118421,
            "unit": "ns",
            "range": "± 340001.76944345905"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7127208.323232323,
            "unit": "ns",
            "range": "± 976546.3098967795"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31767592.741573032,
            "unit": "ns",
            "range": "± 1743996.0232199337"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7628089.157894737,
            "unit": "ns",
            "range": "± 574492.9770305756"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 37131336.93877551,
            "unit": "ns",
            "range": "± 2957720.2172238673"
          }
        ]
      }
    ]
  }
}