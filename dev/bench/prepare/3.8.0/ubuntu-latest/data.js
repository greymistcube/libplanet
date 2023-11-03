window.BENCHMARK_DATA = {
  "lastUpdate": 1698979632944,
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
          "id": "3cf2b69679f69efe3e013b93a465dfa18cd823eb",
          "message": "Prepare 3.8.0",
          "timestamp": "2023-11-03T11:30:24+09:00",
          "tree_id": "433e7e18bf05b1ccd8d1d5fc493971275c2c56c6",
          "url": "https://github.com/greymistcube/libplanet/commit/3cf2b69679f69efe3e013b93a465dfa18cd823eb"
        },
        "date": 1698979624399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8619258.55882353,
            "unit": "ns",
            "range": "± 257829.34012615858"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21700887.776119404,
            "unit": "ns",
            "range": "± 1023078.1351461017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53814585.125,
            "unit": "ns",
            "range": "± 1820458.1918444454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108012608.64285715,
            "unit": "ns",
            "range": "± 1751149.4595946711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224531263.8857143,
            "unit": "ns",
            "range": "± 7299711.676051455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1403280.9157894736,
            "unit": "ns",
            "range": "± 118444.17312223453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2737098.515789474,
            "unit": "ns",
            "range": "± 196619.7008841797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2162735.7083333335,
            "unit": "ns",
            "range": "± 195720.71244139352"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10282902.193181818,
            "unit": "ns",
            "range": "± 954069.8818291877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3424910.5104166665,
            "unit": "ns",
            "range": "± 237828.94056482983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3623181.7319587627,
            "unit": "ns",
            "range": "± 256327.8746964648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4377115.051282051,
            "unit": "ns",
            "range": "± 225074.59389854452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4524289.604166667,
            "unit": "ns",
            "range": "± 428163.50838657987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12437430.818181818,
            "unit": "ns",
            "range": "± 989444.663085222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58238.822916666664,
            "unit": "ns",
            "range": "± 10021.703780973301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5491465.298958333,
            "unit": "ns",
            "range": "± 93694.71524327144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1739531.3951322115,
            "unit": "ns",
            "range": "± 17474.591664539792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1185246.2628173828,
            "unit": "ns",
            "range": "± 22278.11081152963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2814840.1517427885,
            "unit": "ns",
            "range": "± 75306.71473933714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890314.4052036831,
            "unit": "ns",
            "range": "± 10331.891790914286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 844203.5458984375,
            "unit": "ns",
            "range": "± 17602.894501471208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292480.6736842105,
            "unit": "ns",
            "range": "± 31571.970267689572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 288058,
            "unit": "ns",
            "range": "± 23587.39252183139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259310.28125,
            "unit": "ns",
            "range": "± 28205.841256808424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4408537.78125,
            "unit": "ns",
            "range": "± 203988.30066066922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4085409.202247191,
            "unit": "ns",
            "range": "± 225577.53489866544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23469.848484848484,
            "unit": "ns",
            "range": "± 6907.128241029943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90981.41414141415,
            "unit": "ns",
            "range": "± 12898.445509100178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86436.5,
            "unit": "ns",
            "range": "± 14493.817708515475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95936.82828282828,
            "unit": "ns",
            "range": "± 18332.89058620387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10359.01,
            "unit": "ns",
            "range": "± 6224.56715868905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21971.14,
            "unit": "ns",
            "range": "± 7550.227452617745"
          }
        ]
      }
    ]
  }
}