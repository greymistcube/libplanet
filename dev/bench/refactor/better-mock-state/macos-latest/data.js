window.BENCHMARK_DATA = {
  "lastUpdate": 1688658094566,
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
          "id": "1e826afd74a68a4c93f625498c1b0cfbf58b3636",
          "message": "Use mock state as intended",
          "timestamp": "2023-07-07T00:21:54+09:00",
          "tree_id": "6a013380116525dd68f340aaf5d5418577dd03f1",
          "url": "https://github.com/greymistcube/libplanet/commit/1e826afd74a68a4c93f625498c1b0cfbf58b3636"
        },
        "date": 1688658078306,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8433406.762711864,
            "unit": "ns",
            "range": "± 371885.925424967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20773461.166666668,
            "unit": "ns",
            "range": "± 560745.9827555662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54445625.46428572,
            "unit": "ns",
            "range": "± 1558149.5106832592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105538614.2413793,
            "unit": "ns",
            "range": "± 4488199.938828356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220477251.45890412,
            "unit": "ns",
            "range": "± 10667648.223867701"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74867.27368421052,
            "unit": "ns",
            "range": "± 11771.909205809909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349551.55319148937,
            "unit": "ns",
            "range": "± 32057.570988540487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369024.9175824176,
            "unit": "ns",
            "range": "± 38742.26363663272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301228.3510638298,
            "unit": "ns",
            "range": "± 28917.115118442885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4085473.1415094337,
            "unit": "ns",
            "range": "± 167938.8346362007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3720281.3333333335,
            "unit": "ns",
            "range": "± 69504.51918366445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18153.354838709678,
            "unit": "ns",
            "range": "± 3840.4503009445707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82758.60416666667,
            "unit": "ns",
            "range": "± 6907.790457126027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106496.64285714286,
            "unit": "ns",
            "range": "± 16245.789016957748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124887.55319148937,
            "unit": "ns",
            "range": "± 13666.94086430969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6182.3105263157895,
            "unit": "ns",
            "range": "± 877.5531055608585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18371.666666666668,
            "unit": "ns",
            "range": "± 2963.9783060189097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640437.1391752576,
            "unit": "ns",
            "range": "± 208197.4049417596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3050981.7462686566,
            "unit": "ns",
            "range": "± 142851.59530492447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312290.056701031,
            "unit": "ns",
            "range": "± 297675.2750132044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6153394.815384615,
            "unit": "ns",
            "range": "± 287158.8617667651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3227663.794736842,
            "unit": "ns",
            "range": "± 227056.5448838059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394836.827160494,
            "unit": "ns",
            "range": "± 168518.3826221779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4821875.515789473,
            "unit": "ns",
            "range": "± 328748.85616666515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4279190.010638298,
            "unit": "ns",
            "range": "± 337661.1527534443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8057261.388888889,
            "unit": "ns",
            "range": "± 704445.1221891276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6855851.963145381,
            "unit": "ns",
            "range": "± 384197.4231222608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1987663.1662760417,
            "unit": "ns",
            "range": "± 31780.375553752805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296255.133658854,
            "unit": "ns",
            "range": "± 22769.361493890756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2622102.39859375,
            "unit": "ns",
            "range": "± 105202.06367015283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 891135.529296875,
            "unit": "ns",
            "range": "± 18235.780866973717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737226.2993539664,
            "unit": "ns",
            "range": "± 2696.543905494891"
          }
        ]
      }
    ]
  }
}