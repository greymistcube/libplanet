window.BENCHMARK_DATA = {
  "lastUpdate": 1678931931582,
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
          "id": "8d0d10e26dfb58f88d15b33cf03b64cc2806949b",
          "message": "Changed validator power to use Integer instead of Binary",
          "timestamp": "2023-03-16T10:33:53+09:00",
          "tree_id": "e680238104654ec491383068a58090a40d44d206",
          "url": "https://github.com/greymistcube/libplanet/commit/8d0d10e26dfb58f88d15b33cf03b64cc2806949b"
        },
        "date": 1678931424096,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106422.44897959183,
            "unit": "ns",
            "range": "± 7688.665249710923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4831440.416666667,
            "unit": "ns",
            "range": "± 18941.00776634161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536848.0208333333,
            "unit": "ns",
            "range": "± 2997.8814172681164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178072.2330729167,
            "unit": "ns",
            "range": "± 3653.4419981090773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637656.3616071427,
            "unit": "ns",
            "range": "± 8170.120662453041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816457.6171875,
            "unit": "ns",
            "range": "± 954.0963648143991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757604.90234375,
            "unit": "ns",
            "range": "± 1403.2966730614676"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4730019.192708333,
            "unit": "ns",
            "range": "± 36645.95262846785"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5607968.9655172415,
            "unit": "ns",
            "range": "± 163059.38248610156"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26010253.846153848,
            "unit": "ns",
            "range": "± 399982.6571560835"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6083764.705882353,
            "unit": "ns",
            "range": "± 193807.9741336503"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28764288.23529412,
            "unit": "ns",
            "range": "± 564425.8054456238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 95952.63157894737,
            "unit": "ns",
            "range": "± 8898.563619510822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197357.60869565216,
            "unit": "ns",
            "range": "± 13064.794011788817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179711.11111111112,
            "unit": "ns",
            "range": "± 14072.377697424017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4099173.3333333335,
            "unit": "ns",
            "range": "± 36754.71722235444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8913090,
            "unit": "ns",
            "range": "± 265403.2330312656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24013.186813186814,
            "unit": "ns",
            "range": "± 2351.2270456654373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54377.89473684211,
            "unit": "ns",
            "range": "± 8505.14461266937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46481.914893617024,
            "unit": "ns",
            "range": "± 4803.828284423519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120261.61616161616,
            "unit": "ns",
            "range": "± 26588.75666583224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6516.326530612245,
            "unit": "ns",
            "range": "± 1261.0496264302203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21561.458333333332,
            "unit": "ns",
            "range": "± 3520.9858007058087"
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
          "id": "393b0e52a14ff970955577d3003f68d1a0a90a21",
          "message": "Changelog",
          "timestamp": "2023-03-16T10:37:12+09:00",
          "tree_id": "5b3d9db1e1d676d54f19d5d73ca860ba424f30ce",
          "url": "https://github.com/greymistcube/libplanet/commit/393b0e52a14ff970955577d3003f68d1a0a90a21"
        },
        "date": 1678931910002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 118553.26086956522,
            "unit": "ns",
            "range": "± 12762.147422448079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6006185.208333333,
            "unit": "ns",
            "range": "± 107618.79738816702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837481.4453125,
            "unit": "ns",
            "range": "± 32758.911105157487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1372927.4739583333,
            "unit": "ns",
            "range": "± 26206.162237358974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3020792.072610294,
            "unit": "ns",
            "range": "± 53553.60539491538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974744.2670036765,
            "unit": "ns",
            "range": "± 18835.20309933441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919676.2137276785,
            "unit": "ns",
            "range": "± 9224.726990372224"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5521648.359375,
            "unit": "ns",
            "range": "± 395921.99853358476"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6297788.29787234,
            "unit": "ns",
            "range": "± 578622.9538869105"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31617224.210526317,
            "unit": "ns",
            "range": "± 1978548.4370648777"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7002190.52631579,
            "unit": "ns",
            "range": "± 594771.3272492253"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34167618.75,
            "unit": "ns",
            "range": "± 2393585.5371481376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100161.85567010309,
            "unit": "ns",
            "range": "± 12349.143385431717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210150,
            "unit": "ns",
            "range": "± 22314.27890411771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187334.693877551,
            "unit": "ns",
            "range": "± 19914.223803581637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3980989.2473118277,
            "unit": "ns",
            "range": "± 288118.15151244646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10386155.223880596,
            "unit": "ns",
            "range": "± 490540.7820699648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23390.721649484534,
            "unit": "ns",
            "range": "± 6962.968752536324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56617.34693877551,
            "unit": "ns",
            "range": "± 9070.150722331755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50795.744680851065,
            "unit": "ns",
            "range": "± 8219.51408570354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118593.6170212766,
            "unit": "ns",
            "range": "± 22236.576516262074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11441,
            "unit": "ns",
            "range": "± 5899.051370407539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21730.303030303032,
            "unit": "ns",
            "range": "± 6276.477865573298"
          }
        ]
      }
    ]
  }
}