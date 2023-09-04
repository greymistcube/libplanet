window.BENCHMARK_DATA = {
  "lastUpdate": 1693788536307,
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
          "id": "b541ef00cfb97a92d9e53daa5e24e8f466f9331b",
          "message": "Refactor Nibbles",
          "timestamp": "2023-08-31T19:51:07+09:00",
          "tree_id": "1f4eeee57e62a9fd70bd85b53ac841c49eb803da",
          "url": "https://github.com/greymistcube/libplanet/commit/b541ef00cfb97a92d9e53daa5e24e8f466f9331b"
        },
        "date": 1693480145512,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1239957.2164948455,
            "unit": "ns",
            "range": "± 85232.1025291902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2299412,
            "unit": "ns",
            "range": "± 85596.89554259904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1615420.8333333333,
            "unit": "ns",
            "range": "± 117052.03154033377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4256887.5,
            "unit": "ns",
            "range": "± 165838.65989877415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43014.28571428572,
            "unit": "ns",
            "range": "± 2089.8155881671914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6939660,
            "unit": "ns",
            "range": "± 24847.011892780993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17388040,
            "unit": "ns",
            "range": "± 105371.48435077544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44700706.666666664,
            "unit": "ns",
            "range": "± 461888.30973154824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89290393.33333333,
            "unit": "ns",
            "range": "± 818535.340424474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178110306.66666666,
            "unit": "ns",
            "range": "± 1518217.2089407397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4359372.65625,
            "unit": "ns",
            "range": "± 5620.775350389907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1378356.8229166667,
            "unit": "ns",
            "range": "± 2107.477317713425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 996138.90625,
            "unit": "ns",
            "range": "± 1206.4969258600388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2523972.4869791665,
            "unit": "ns",
            "range": "± 3532.2192425099747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796450.6068638393,
            "unit": "ns",
            "range": "± 827.579046307348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733442.63671875,
            "unit": "ns",
            "range": "± 794.0058694205927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2901937.5,
            "unit": "ns",
            "range": "± 44142.02646005278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2986543.75,
            "unit": "ns",
            "range": "± 37972.18225227515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3859277.419354839,
            "unit": "ns",
            "range": "± 116845.35566202427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3301550,
            "unit": "ns",
            "range": "± 146133.25878127094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5488694.285714285,
            "unit": "ns",
            "range": "± 158097.66702683418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240996.42857142858,
            "unit": "ns",
            "range": "± 9557.100440571337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226669.04761904763,
            "unit": "ns",
            "range": "± 6489.973057753016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204016.66666666666,
            "unit": "ns",
            "range": "± 7932.811831002881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3722626.6666666665,
            "unit": "ns",
            "range": "± 32665.041747730134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3374485.714285714,
            "unit": "ns",
            "range": "± 22723.348112691263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16769.38775510204,
            "unit": "ns",
            "range": "± 1700.2369854990293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76097.72727272728,
            "unit": "ns",
            "range": "± 4511.644634063639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63534.782608695656,
            "unit": "ns",
            "range": "± 2455.73862084568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70626.31578947368,
            "unit": "ns",
            "range": "± 10196.15290953089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4094.8453608247423,
            "unit": "ns",
            "range": "± 419.4170393784236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15472.527472527472,
            "unit": "ns",
            "range": "± 1458.695454778834"
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
          "id": "796ec7b10eb0f9fb609b40d4d3294e364552317e",
          "message": "Refactor Nibbles",
          "timestamp": "2023-08-31T19:56:07+09:00",
          "tree_id": "05dd4d4eefd41d688771dc4903ddf6ce41c06b2c",
          "url": "https://github.com/greymistcube/libplanet/commit/796ec7b10eb0f9fb609b40d4d3294e364552317e"
        },
        "date": 1693480695954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1582123.469387755,
            "unit": "ns",
            "range": "± 241497.3547062313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3074486.170212766,
            "unit": "ns",
            "range": "± 288056.22802780214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174566.3157894737,
            "unit": "ns",
            "range": "± 310051.91967774794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5912650,
            "unit": "ns",
            "range": "± 597589.5852695899"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63598.94736842105,
            "unit": "ns",
            "range": "± 16032.63622777284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9444517.708333334,
            "unit": "ns",
            "range": "± 875915.7049078221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26103275.25773196,
            "unit": "ns",
            "range": "± 1888450.6725107867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65873755.88235294,
            "unit": "ns",
            "range": "± 3114882.5921374154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131944005.35714285,
            "unit": "ns",
            "range": "± 5595663.731413968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 276234014.28571427,
            "unit": "ns",
            "range": "± 6805532.4659407465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5004497.864583333,
            "unit": "ns",
            "range": "± 83672.78935682513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1711691.1588541667,
            "unit": "ns",
            "range": "± 24485.983710393524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1216865.7007334183,
            "unit": "ns",
            "range": "± 46436.23485193481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3126390.5338541665,
            "unit": "ns",
            "range": "± 85756.45043540215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1077442.3665364583,
            "unit": "ns",
            "range": "± 33898.47176314967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1001370.1549899194,
            "unit": "ns",
            "range": "± 30022.432889029533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3945964.835164835,
            "unit": "ns",
            "range": "± 258417.24588718338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4188873.913043478,
            "unit": "ns",
            "range": "± 350663.5229746022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5357067.24137931,
            "unit": "ns",
            "range": "± 231227.1051827702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4685825.263157895,
            "unit": "ns",
            "range": "± 357316.16370428156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7695424.444444444,
            "unit": "ns",
            "range": "± 435379.8277962992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327686.59793814435,
            "unit": "ns",
            "range": "± 49066.37432445032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 324147.4747474748,
            "unit": "ns",
            "range": "± 48909.92625648879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284785.56701030926,
            "unit": "ns",
            "range": "± 43956.53153422026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4772467.777777778,
            "unit": "ns",
            "range": "± 545974.7680772699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4264409.677419355,
            "unit": "ns",
            "range": "± 421276.188726515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31203.030303030304,
            "unit": "ns",
            "range": "± 11111.204627518233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105490.52631578948,
            "unit": "ns",
            "range": "± 22331.978186449243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119190.72164948453,
            "unit": "ns",
            "range": "± 27577.425408876195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126262.24489795919,
            "unit": "ns",
            "range": "± 29031.502673575098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6754.320987654321,
            "unit": "ns",
            "range": "± 1606.7863410170664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29232.65306122449,
            "unit": "ns",
            "range": "± 9142.999412092655"
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
          "id": "2fc6ee5bdb34a5269df699df280a00c30863a734",
          "message": "More distinction/clarification for nibbles creation",
          "timestamp": "2023-09-04T09:29:03+09:00",
          "tree_id": "c17c2da2db83525ebe1888db792220210c020288",
          "url": "https://github.com/greymistcube/libplanet/commit/2fc6ee5bdb34a5269df699df280a00c30863a734"
        },
        "date": 1693788502798,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1489971.5789473683,
            "unit": "ns",
            "range": "± 138010.44492013953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2715175.3086419753,
            "unit": "ns",
            "range": "± 142181.05229852552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1876504.347826087,
            "unit": "ns",
            "range": "± 131955.58519594825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5100927.2727272725,
            "unit": "ns",
            "range": "± 191357.33937302718"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54686.666666666664,
            "unit": "ns",
            "range": "± 4124.282709171201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8540220,
            "unit": "ns",
            "range": "± 144244.8127316889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23024045,
            "unit": "ns",
            "range": "± 515703.99146776967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59106734.782608695,
            "unit": "ns",
            "range": "± 1291237.5616258068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117068553.57142857,
            "unit": "ns",
            "range": "± 3250858.9880764037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232534438.70967743,
            "unit": "ns",
            "range": "± 6976210.231765163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5256890.087890625,
            "unit": "ns",
            "range": "± 96372.74701156057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1718123.828125,
            "unit": "ns",
            "range": "± 20772.21001168778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1237288.828125,
            "unit": "ns",
            "range": "± 13029.0001248158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3184486.3802083335,
            "unit": "ns",
            "range": "± 39162.235700507954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974973.4244791666,
            "unit": "ns",
            "range": "± 16285.427551356986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900394.7037760416,
            "unit": "ns",
            "range": "± 12988.50280567333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3531873.1343283583,
            "unit": "ns",
            "range": "± 166049.0166606431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3761693.023255814,
            "unit": "ns",
            "range": "± 138162.73943872759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4513459.183673469,
            "unit": "ns",
            "range": "± 178444.53143573698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4194330.952380952,
            "unit": "ns",
            "range": "± 152644.00236369405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6855007.2727272725,
            "unit": "ns",
            "range": "± 287307.50196761085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286978.72340425535,
            "unit": "ns",
            "range": "± 16299.064042924683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274080.2197802198,
            "unit": "ns",
            "range": "± 15391.579370120387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248590,
            "unit": "ns",
            "range": "± 12942.47838844798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4595602.94117647,
            "unit": "ns",
            "range": "± 144170.55447963753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4341939.285714285,
            "unit": "ns",
            "range": "± 122046.24302496138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22847.802197802197,
            "unit": "ns",
            "range": "± 1658.1099026688337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92141.75824175825,
            "unit": "ns",
            "range": "± 6707.525888202261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79101.05263157895,
            "unit": "ns",
            "range": "± 6530.183515990925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89205.26315789473,
            "unit": "ns",
            "range": "± 12668.291530524217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5606.382978723404,
            "unit": "ns",
            "range": "± 758.1185697030949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20878.021978021978,
            "unit": "ns",
            "range": "± 1737.0986153674753"
          }
        ]
      }
    ]
  }
}