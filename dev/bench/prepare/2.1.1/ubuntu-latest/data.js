window.BENCHMARK_DATA = {
  "lastUpdate": 1687252711815,
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
          "id": "9ba8c21ea9836b0b51f43ea99013cda45d76958f",
          "message": "Prepare 2.1.1",
          "timestamp": "2023-06-20T17:58:10+09:00",
          "tree_id": "d623fe48c67fa1f2775ded58df2ab190f7f15808",
          "url": "https://github.com/greymistcube/libplanet/commit/9ba8c21ea9836b0b51f43ea99013cda45d76958f"
        },
        "date": 1687252702487,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3182153.924731183,
            "unit": "ns",
            "range": "± 319180.7762506068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3419857.3917525774,
            "unit": "ns",
            "range": "± 360732.55686832813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4481843.734042553,
            "unit": "ns",
            "range": "± 509893.73513592413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4240293.095744681,
            "unit": "ns",
            "range": "± 505528.8034243097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7562706.159574468,
            "unit": "ns",
            "range": "± 659433.9762373323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6519899.99671875,
            "unit": "ns",
            "range": "± 607511.4525372379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930084.5846354167,
            "unit": "ns",
            "range": "± 32205.705150721995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1410659.7243009869,
            "unit": "ns",
            "range": "± 30893.656612334955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2938045.9575352822,
            "unit": "ns",
            "range": "± 131671.02311030074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 911482.4421237245,
            "unit": "ns",
            "range": "± 35998.9870004959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 842531.1013020833,
            "unit": "ns",
            "range": "± 25102.92935067373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340963.9797979798,
            "unit": "ns",
            "range": "± 67540.78244501838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323181.8068181818,
            "unit": "ns",
            "range": "± 32361.49889644052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289969.1030927835,
            "unit": "ns",
            "range": "± 45694.18524378598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4349497.073684211,
            "unit": "ns",
            "range": "± 485459.63813198643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3973883.9591836734,
            "unit": "ns",
            "range": "± 377330.8857635859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24506.222222222223,
            "unit": "ns",
            "range": "± 9680.87847206697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99729.06315789474,
            "unit": "ns",
            "range": "± 20243.75370372909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87595.19565217392,
            "unit": "ns",
            "range": "± 14246.723986058196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122370.86315789474,
            "unit": "ns",
            "range": "± 23344.95014263098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11338.09,
            "unit": "ns",
            "range": "± 9329.260867032903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29892.817073170732,
            "unit": "ns",
            "range": "± 6722.518080042258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1395330.40625,
            "unit": "ns",
            "range": "± 211270.32155792994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2626974.625,
            "unit": "ns",
            "range": "± 271455.13684671436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141926.1,
            "unit": "ns",
            "range": "± 225804.47584824846"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6119205.136842106,
            "unit": "ns",
            "range": "± 533065.5253584029"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66661.06060606061,
            "unit": "ns",
            "range": "± 14989.207727642306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7766443.489361702,
            "unit": "ns",
            "range": "± 664452.1425320365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21852887.979797978,
            "unit": "ns",
            "range": "± 3036251.4991222555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55420100.8556701,
            "unit": "ns",
            "range": "± 4147039.631473371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127166472.84,
            "unit": "ns",
            "range": "± 11904506.23290875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256039163.78846154,
            "unit": "ns",
            "range": "± 10451375.045802915"
          }
        ]
      }
    ]
  }
}