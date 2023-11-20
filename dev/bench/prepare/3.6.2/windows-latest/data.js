window.BENCHMARK_DATA = {
  "lastUpdate": 1700489289005,
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
          "id": "585f4ed3ed66691c663e6e789ea87a50001ec8ea",
          "message": "Prepare 3.6.2",
          "timestamp": "2023-11-20T18:48:09+09:00",
          "tree_id": "1a049c226a0684bcc3f69f0003f0d7a1bb370460",
          "url": "https://github.com/greymistcube/libplanet/commit/585f4ed3ed66691c663e6e789ea87a50001ec8ea"
        },
        "date": 1700474394172,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 937952.7472527473,
            "unit": "ns",
            "range": "± 90378.9114299217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1680509.4594594594,
            "unit": "ns",
            "range": "± 83623.10614833435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1300282.6530612244,
            "unit": "ns",
            "range": "± 108800.37525093547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5029275.806451613,
            "unit": "ns",
            "range": "± 228175.556287355"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33620.25316455696,
            "unit": "ns",
            "range": "± 1755.7509713930247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5119786.666666667,
            "unit": "ns",
            "range": "± 21572.7959200824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12988128.57142857,
            "unit": "ns",
            "range": "± 115363.6353087417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32217008.333333332,
            "unit": "ns",
            "range": "± 303889.6942771814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64265661.538461536,
            "unit": "ns",
            "range": "± 636809.5797783163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128019333.33333333,
            "unit": "ns",
            "range": "± 662317.1194123451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3131558.1510416665,
            "unit": "ns",
            "range": "± 12195.379663280077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1006622.890625,
            "unit": "ns",
            "range": "± 2756.428464419907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 675045.5208333334,
            "unit": "ns",
            "range": "± 1304.5973543123594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920989.8158482143,
            "unit": "ns",
            "range": "± 4432.461209721162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623086.9838169643,
            "unit": "ns",
            "range": "± 1448.5543754707926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590013.28125,
            "unit": "ns",
            "range": "± 1014.4576820620775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2127196.3855421687,
            "unit": "ns",
            "range": "± 113000.2454624823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2211671.4285714286,
            "unit": "ns",
            "range": "± 21024.095281785194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2727809.375,
            "unit": "ns",
            "range": "± 80704.00861201622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2598197.222222222,
            "unit": "ns",
            "range": "± 85785.01196466535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5572388.888888889,
            "unit": "ns",
            "range": "± 115131.85734262867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168947.14285714287,
            "unit": "ns",
            "range": "± 7979.352366088027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162755.29411764705,
            "unit": "ns",
            "range": "± 8779.175927841337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143038.88888888888,
            "unit": "ns",
            "range": "± 2935.009547812687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2688780,
            "unit": "ns",
            "range": "± 41171.751758422215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2446406.6666666665,
            "unit": "ns",
            "range": "± 34307.15182970843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10390.322580645161,
            "unit": "ns",
            "range": "± 1445.9887933392963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51269.47368421053,
            "unit": "ns",
            "range": "± 4328.826524792478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43053.57142857143,
            "unit": "ns",
            "range": "± 1843.2150060265783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45238.20224719101,
            "unit": "ns",
            "range": "± 7299.571992713893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2169.7916666666665,
            "unit": "ns",
            "range": "± 389.0933568578074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9398.91304347826,
            "unit": "ns",
            "range": "± 1094.9930568516281"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a27f4c51533ea4fb42c312f89fa912ad45c8a5d",
          "message": "Merge pull request #3502 from greymistcube/revert/prepare/3.6.1\n\n⏪ Revert \"Prepare 3.6.2\"",
          "timestamp": "2023-11-20T21:07:48+09:00",
          "tree_id": "05387f165cf02d173e9e04590549dee77618644e",
          "url": "https://github.com/greymistcube/libplanet/commit/1a27f4c51533ea4fb42c312f89fa912ad45c8a5d"
        },
        "date": 1700489263691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012246,
            "unit": "ns",
            "range": "± 153517.11609241925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1758636.923076923,
            "unit": "ns",
            "range": "± 81291.97294557818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1350820,
            "unit": "ns",
            "range": "± 140305.61375983947"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4960158.695652174,
            "unit": "ns",
            "range": "± 189511.9715668373"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33734.17721518988,
            "unit": "ns",
            "range": "± 1756.8828803798028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5188415.384615385,
            "unit": "ns",
            "range": "± 15935.225453579571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12915592.857142856,
            "unit": "ns",
            "range": "± 110566.3077370019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32559871.42857143,
            "unit": "ns",
            "range": "± 282028.7912977665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65532665.384615384,
            "unit": "ns",
            "range": "± 679769.7574009328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127485733.33333333,
            "unit": "ns",
            "range": "± 512822.71326267836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3124933.233173077,
            "unit": "ns",
            "range": "± 6261.466234684959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1013948.6197916666,
            "unit": "ns",
            "range": "± 5227.050811858124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745411.71875,
            "unit": "ns",
            "range": "± 1469.9873242729172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1897909.344951923,
            "unit": "ns",
            "range": "± 5781.781511413055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 600171.2262834822,
            "unit": "ns",
            "range": "± 3371.2859807487653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 553149.0690104166,
            "unit": "ns",
            "range": "± 1290.5631610311132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2108056,
            "unit": "ns",
            "range": "± 32134.043214842004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2216433.3333333335,
            "unit": "ns",
            "range": "± 48939.97386254581"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2772609.523809524,
            "unit": "ns",
            "range": "± 65272.5585890572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2605335.714285714,
            "unit": "ns",
            "range": "± 139287.53016160423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6016982.142857143,
            "unit": "ns",
            "range": "± 321964.45667810534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171327.27272727274,
            "unit": "ns",
            "range": "± 8746.738284755615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165322.53521126762,
            "unit": "ns",
            "range": "± 8069.646782553188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141835.29411764705,
            "unit": "ns",
            "range": "± 4222.585905467793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2792528.5714285714,
            "unit": "ns",
            "range": "± 39028.22309306687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2493035.294117647,
            "unit": "ns",
            "range": "± 51184.274210645875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10384.21052631579,
            "unit": "ns",
            "range": "± 1738.6296749729447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48715.882352941175,
            "unit": "ns",
            "range": "± 2844.9015775584216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42593.24324324324,
            "unit": "ns",
            "range": "± 1426.4447920423506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49709.09090909091,
            "unit": "ns",
            "range": "± 9406.208228970549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2357.8947368421054,
            "unit": "ns",
            "range": "± 444.7277310436561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11787.5,
            "unit": "ns",
            "range": "± 2202.689743305479"
          }
        ]
      }
    ]
  }
}