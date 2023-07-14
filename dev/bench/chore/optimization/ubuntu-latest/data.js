window.BENCHMARK_DATA = {
  "lastUpdate": 1689316724517,
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
          "id": "e26c06789337ed69008ba96da5737c2f5c713a79",
          "message": "Faster hex for netstandard2.1 and up",
          "timestamp": "2023-07-12T18:47:56+09:00",
          "tree_id": "48d3f531a9ed328184da0b1e4a76cc37947d4a5f",
          "url": "https://github.com/greymistcube/libplanet/commit/e26c06789337ed69008ba96da5737c2f5c713a79"
        },
        "date": 1689156072483,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286104.76470588235,
            "unit": "ns",
            "range": "± 9228.304854544715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271941.05263157893,
            "unit": "ns",
            "range": "± 7983.042266892547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240282.76470588235,
            "unit": "ns",
            "range": "± 4920.594381390979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4423897.142857143,
            "unit": "ns",
            "range": "± 72252.96754497316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4049925.7333333334,
            "unit": "ns",
            "range": "± 60167.59094570368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18806.323076923076,
            "unit": "ns",
            "range": "± 886.9664964728851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85606.5,
            "unit": "ns",
            "range": "± 3950.048495829258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72508.30769230769,
            "unit": "ns",
            "range": "± 873.2368316227644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91371.70408163265,
            "unit": "ns",
            "range": "± 12659.49468968361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4896.895833333333,
            "unit": "ns",
            "range": "± 564.4566736282854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19516.894736842107,
            "unit": "ns",
            "range": "± 1464.6025128739486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449331.948979592,
            "unit": "ns",
            "range": "± 84961.7476612691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2691901.7666666666,
            "unit": "ns",
            "range": "± 80117.08946918031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1847892.5529411766,
            "unit": "ns",
            "range": "± 96557.3722824077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4918002.333333333,
            "unit": "ns",
            "range": "± 121041.14045925939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6079665.297916667,
            "unit": "ns",
            "range": "± 25583.689743190258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1926331.9907924107,
            "unit": "ns",
            "range": "± 6186.564731541368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384187.0032087055,
            "unit": "ns",
            "range": "± 2974.9175935741036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620896.1515625,
            "unit": "ns",
            "range": "± 5570.813997095822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842145.3924479167,
            "unit": "ns",
            "range": "± 2188.16979023311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767115.576953125,
            "unit": "ns",
            "range": "± 1091.0424233315864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3398040.0967741935,
            "unit": "ns",
            "range": "± 103331.16186364267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3595404.3,
            "unit": "ns",
            "range": "± 125795.18088751682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4314854.066666666,
            "unit": "ns",
            "range": "± 71792.52140565167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3930063.0212765955,
            "unit": "ns",
            "range": "± 151901.68942508567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6732835.285714285,
            "unit": "ns",
            "range": "± 181432.06460287966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7933744.076923077,
            "unit": "ns",
            "range": "± 59229.651770969045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21695889.066666666,
            "unit": "ns",
            "range": "± 249493.68870044066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54027259.76470588,
            "unit": "ns",
            "range": "± 1076934.9170231067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108482180.8,
            "unit": "ns",
            "range": "± 1873239.3180180918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213050217.4,
            "unit": "ns",
            "range": "± 1858628.7043512866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48795.85393258427,
            "unit": "ns",
            "range": "± 2711.1753302956404"
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
          "id": "1f99608a928e93277dd971d450e9b299988a7db3",
          "message": "Changelog",
          "timestamp": "2023-07-14T15:24:16+09:00",
          "tree_id": "2ad944efb5e41f0670751e86fdb761c15c140134",
          "url": "https://github.com/greymistcube/libplanet/commit/1f99608a928e93277dd971d450e9b299988a7db3"
        },
        "date": 1689316715659,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313673.5,
            "unit": "ns",
            "range": "± 6424.694983544273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296727.72,
            "unit": "ns",
            "range": "± 11937.646889858102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269365.6923076923,
            "unit": "ns",
            "range": "± 11131.465100157217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4576811.533333333,
            "unit": "ns",
            "range": "± 54098.244035229436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4321055.470588235,
            "unit": "ns",
            "range": "± 138178.62725258275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21254.894736842107,
            "unit": "ns",
            "range": "± 2039.3349691655283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95423.75,
            "unit": "ns",
            "range": "± 8261.47691906299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74109.71428571429,
            "unit": "ns",
            "range": "± 946.758634546267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112998.78787878787,
            "unit": "ns",
            "range": "± 15824.070808889526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5545.301075268817,
            "unit": "ns",
            "range": "± 1062.6441568185328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23327.515463917527,
            "unit": "ns",
            "range": "± 3345.1476521765885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611692.956043956,
            "unit": "ns",
            "range": "± 100024.34363603826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2918724.9615384615,
            "unit": "ns",
            "range": "± 79876.01481069559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1891442.7407407407,
            "unit": "ns",
            "range": "± 95638.32038777368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5572303.27,
            "unit": "ns",
            "range": "± 330664.4552830459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5990017.978645833,
            "unit": "ns",
            "range": "± 69967.46376392181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1918937.9012276786,
            "unit": "ns",
            "range": "± 4816.208326215255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1404148.9908854167,
            "unit": "ns",
            "range": "± 5581.316090949733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645804.411979167,
            "unit": "ns",
            "range": "± 6036.882549699157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837728.827734375,
            "unit": "ns",
            "range": "± 3710.6656940978664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767542.2841145833,
            "unit": "ns",
            "range": "± 2981.944814996409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452195.96,
            "unit": "ns",
            "range": "± 88803.6289988947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3882488.285714286,
            "unit": "ns",
            "range": "± 54862.6360726056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4501366.461538462,
            "unit": "ns",
            "range": "± 74880.04829683203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4385325.875,
            "unit": "ns",
            "range": "± 82799.561390042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6738539.260869565,
            "unit": "ns",
            "range": "± 156071.29636868395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8324006.8,
            "unit": "ns",
            "range": "± 89820.8435300913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22828209.157894738,
            "unit": "ns",
            "range": "± 497709.95591958344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58089900.733333334,
            "unit": "ns",
            "range": "± 373867.3461742177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113921338.26666667,
            "unit": "ns",
            "range": "± 1027048.5876198476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217747948.46666667,
            "unit": "ns",
            "range": "± 3199363.2339556227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49956.744680851065,
            "unit": "ns",
            "range": "± 3069.1971943787125"
          }
        ]
      }
    ]
  }
}