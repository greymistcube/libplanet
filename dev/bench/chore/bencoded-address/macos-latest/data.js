window.BENCHMARK_DATA = {
  "lastUpdate": 1699255216510,
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
          "id": "142e48097ebf05b86f61f397382388d721ecbd11",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T15:19:37+09:00",
          "tree_id": "0353fbdd6a340ae1c7174cc775146df82e769b4e",
          "url": "https://github.com/greymistcube/libplanet/commit/142e48097ebf05b86f61f397382388d721ecbd11"
        },
        "date": 1699255202114,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7996512,
            "unit": "ns",
            "range": "± 47542.91505738627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19590222.633333333,
            "unit": "ns",
            "range": "± 348805.59627757175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49113320.97058824,
            "unit": "ns",
            "range": "± 985658.1579141751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97757594.6923077,
            "unit": "ns",
            "range": "± 1510572.3468195414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196613037.2,
            "unit": "ns",
            "range": "± 3466798.7467799475"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44511.97872340425,
            "unit": "ns",
            "range": "± 8615.613167825431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 220585.4255319149,
            "unit": "ns",
            "range": "± 16506.920315619835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227097.1947368421,
            "unit": "ns",
            "range": "± 18038.77250274594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218014.62371134022,
            "unit": "ns",
            "range": "± 25176.958027239296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3886133.3,
            "unit": "ns",
            "range": "± 87536.40482715268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3519687.7,
            "unit": "ns",
            "range": "± 124883.56114544954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18455.427083333332,
            "unit": "ns",
            "range": "± 4672.471589268567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81811.27551020408,
            "unit": "ns",
            "range": "± 18597.753541609418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70326.16666666667,
            "unit": "ns",
            "range": "± 17851.246502524064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83249.0612244898,
            "unit": "ns",
            "range": "± 19383.281282981527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6930.682795698925,
            "unit": "ns",
            "range": "± 1475.692018550564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16736.98979591837,
            "unit": "ns",
            "range": "± 4608.180843957457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1093687.585106383,
            "unit": "ns",
            "range": "± 119391.31644396865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2367590.4226804124,
            "unit": "ns",
            "range": "± 151896.24752893526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648545.69,
            "unit": "ns",
            "range": "± 132636.90828943392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7686767.1625,
            "unit": "ns",
            "range": "± 482536.6140552417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3025901.4523809524,
            "unit": "ns",
            "range": "± 109644.23360527412"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3078031.5714285714,
            "unit": "ns",
            "range": "± 53087.95713423915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3648849.972222222,
            "unit": "ns",
            "range": "± 119089.65697885801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3568987.5773195876,
            "unit": "ns",
            "range": "± 220795.22565282043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11239981.333333334,
            "unit": "ns",
            "range": "± 1106290.419076542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4679726.012141047,
            "unit": "ns",
            "range": "± 234681.8223284929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1382121.5462582237,
            "unit": "ns",
            "range": "± 30055.364624950005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 895274.103655134,
            "unit": "ns",
            "range": "± 13318.199996034778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2129487.919340093,
            "unit": "ns",
            "range": "± 144353.12738920897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 653286.0587861033,
            "unit": "ns",
            "range": "± 27978.316525380316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601958.120954241,
            "unit": "ns",
            "range": "± 10561.673899481351"
          }
        ]
      }
    ]
  }
}