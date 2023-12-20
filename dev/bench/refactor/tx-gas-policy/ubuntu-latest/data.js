window.BENCHMARK_DATA = {
  "lastUpdate": 1703040537309,
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
          "id": "10880c93f390657fae7c733fbce4e26ddeaa2281",
          "message": "More strict conditions for TxInvoice gas arguments",
          "timestamp": "2023-12-20T11:35:28+09:00",
          "tree_id": "ecc9df8922443ee164d6e95078e2f2b4ec6240b4",
          "url": "https://github.com/greymistcube/libplanet/commit/10880c93f390657fae7c733fbce4e26ddeaa2281"
        },
        "date": 1703040394708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3738859.772042411,
            "unit": "ns",
            "range": "± 29194.41795282279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1210561.1571514423,
            "unit": "ns",
            "range": "± 6833.828548441736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770704.9907602164,
            "unit": "ns",
            "range": "± 2941.468361073732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940215.9482421875,
            "unit": "ns",
            "range": "± 2011.0423671687865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621055.1252253606,
            "unit": "ns",
            "range": "± 2223.0867707874386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581524.0460379465,
            "unit": "ns",
            "range": "± 2568.298040005677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2523794.5416666665,
            "unit": "ns",
            "range": "± 99473.40264997566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2550663.0196078434,
            "unit": "ns",
            "range": "± 83579.72240597362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3156460.5,
            "unit": "ns",
            "range": "± 59780.77502535057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3026308.5,
            "unit": "ns",
            "range": "± 108726.60337213456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6847910.666666667,
            "unit": "ns",
            "range": "± 143152.54155496878"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38218.54255319149,
            "unit": "ns",
            "range": "± 3635.1355942374885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205997.28235294117,
            "unit": "ns",
            "range": "± 10929.1148724642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192682.40217391305,
            "unit": "ns",
            "range": "± 10818.97586920577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169654.11904761905,
            "unit": "ns",
            "range": "± 3862.939353344684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3088502,
            "unit": "ns",
            "range": "± 48282.81320955285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785936.3571428573,
            "unit": "ns",
            "range": "± 36192.05017383948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13085.643678160919,
            "unit": "ns",
            "range": "± 1141.0305009580359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64743.41111111111,
            "unit": "ns",
            "range": "± 6623.819716180342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69908.14,
            "unit": "ns",
            "range": "± 17375.59476114226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75338.80612244898,
            "unit": "ns",
            "range": "± 21150.93413386794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5599.353535353535,
            "unit": "ns",
            "range": "± 2132.2553993419942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15241.92857142857,
            "unit": "ns",
            "range": "± 2563.432686686986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5553162.769230769,
            "unit": "ns",
            "range": "± 32000.47448907033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14228728.966666667,
            "unit": "ns",
            "range": "± 51591.15241127891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37820137.833333336,
            "unit": "ns",
            "range": "± 228638.4590979763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75149665.53333333,
            "unit": "ns",
            "range": "± 479427.9781995961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151626779.4,
            "unit": "ns",
            "range": "± 746895.1725255502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 982781.2340425532,
            "unit": "ns",
            "range": "± 95722.84194681405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900765.9777777777,
            "unit": "ns",
            "range": "± 71529.66070750868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1488512.8505154639,
            "unit": "ns",
            "range": "± 154242.80167564016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5829804.465116279,
            "unit": "ns",
            "range": "± 216096.68559492496"
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
          "id": "1949f2d921126fc7b862cc81fa512f99d9bf4d3e",
          "message": "Changelog",
          "timestamp": "2023-12-20T11:38:02+09:00",
          "tree_id": "7a7f633582caf555a3d76b65bedf802a0b01264d",
          "url": "https://github.com/greymistcube/libplanet/commit/1949f2d921126fc7b862cc81fa512f99d9bf4d3e"
        },
        "date": 1703040531208,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3813310.4407552085,
            "unit": "ns",
            "range": "± 26320.61308455852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1221213.1643880208,
            "unit": "ns",
            "range": "± 3759.266528469531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762374.7458683894,
            "unit": "ns",
            "range": "± 2443.586619461855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934315.245342548,
            "unit": "ns",
            "range": "± 10389.128547836312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615548.7227376302,
            "unit": "ns",
            "range": "± 1329.5069538837279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576667.087890625,
            "unit": "ns",
            "range": "± 4117.584264365869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2413757.3684210526,
            "unit": "ns",
            "range": "± 81262.10707273801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2524904.1515151514,
            "unit": "ns",
            "range": "± 78347.66357361957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3126076.6153846155,
            "unit": "ns",
            "range": "± 84113.30267731825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2847703.4137931033,
            "unit": "ns",
            "range": "± 103365.07771902878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6806855.807692308,
            "unit": "ns",
            "range": "± 181569.88613093732"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42240.645833333336,
            "unit": "ns",
            "range": "± 7821.136187455076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197793.2988505747,
            "unit": "ns",
            "range": "± 10813.5488926548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190390.12280701756,
            "unit": "ns",
            "range": "± 8064.672670866471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174847.61764705883,
            "unit": "ns",
            "range": "± 5489.142230361105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3073953.088235294,
            "unit": "ns",
            "range": "± 62140.27485260548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2803486.933333333,
            "unit": "ns",
            "range": "± 39944.31914100046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16931.612903225807,
            "unit": "ns",
            "range": "± 1560.7415463856614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67817.51063829787,
            "unit": "ns",
            "range": "± 6142.309594590588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59082.265957446805,
            "unit": "ns",
            "range": "± 7820.117304039381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62519.68041237113,
            "unit": "ns",
            "range": "± 12391.223305686295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2884.3010752688174,
            "unit": "ns",
            "range": "± 534.547610132934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15355.04255319149,
            "unit": "ns",
            "range": "± 1692.9246305200265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5579310.466666667,
            "unit": "ns",
            "range": "± 18692.43057598704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14358502.26923077,
            "unit": "ns",
            "range": "± 115596.92360825311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36293126.307692304,
            "unit": "ns",
            "range": "± 220042.46217847161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73855331.3076923,
            "unit": "ns",
            "range": "± 180985.24051304325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 160846047.03846154,
            "unit": "ns",
            "range": "± 478579.8524599657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958797.3263157895,
            "unit": "ns",
            "range": "± 87272.08620774435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1859456.6326530613,
            "unit": "ns",
            "range": "± 71008.7971256889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1379952.329787234,
            "unit": "ns",
            "range": "± 97216.34050824378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6031606.087912088,
            "unit": "ns",
            "range": "± 360497.58914501755"
          }
        ]
      }
    ]
  }
}