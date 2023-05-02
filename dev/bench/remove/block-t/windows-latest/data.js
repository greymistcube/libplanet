window.BENCHMARK_DATA = {
  "lastUpdate": 1682994111045,
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
          "id": "36031c4669e9a2e4d73962ccf813eedf68216b4e",
          "message": "Partially removed t from block",
          "timestamp": "2023-05-02T10:52:11+09:00",
          "tree_id": "8a5c838f0ab496c8378d56632536d2700559c89e",
          "url": "https://github.com/greymistcube/libplanet/commit/36031c4669e9a2e4d73962ccf813eedf68216b4e"
        },
        "date": 1682993438459,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1555098.9247311829,
            "unit": "ns",
            "range": "± 111283.30717296718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2885450,
            "unit": "ns",
            "range": "± 123714.8172208972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2474647.619047619,
            "unit": "ns",
            "range": "± 129636.80263209366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6211631.25,
            "unit": "ns",
            "range": "± 404856.81453609717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52690,
            "unit": "ns",
            "range": "± 3611.0955728082104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8336736,
            "unit": "ns",
            "range": "± 221668.15077197415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22650869.230769232,
            "unit": "ns",
            "range": "± 332205.35412255523"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56896790,
            "unit": "ns",
            "range": "± 2276202.5969018787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114179679.06976745,
            "unit": "ns",
            "range": "± 4186442.2207746794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229208270.37037036,
            "unit": "ns",
            "range": "± 6264954.514465295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5546594.635416667,
            "unit": "ns",
            "range": "± 80613.4035899108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820149.5052083333,
            "unit": "ns",
            "range": "± 25752.247727114456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398271.77734375,
            "unit": "ns",
            "range": "± 29833.376575864437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3076243.8802083335,
            "unit": "ns",
            "range": "± 45575.62451069872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 971762.28515625,
            "unit": "ns",
            "range": "± 12665.326493252156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 898604.5149739584,
            "unit": "ns",
            "range": "± 9440.774937027998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3582023.75,
            "unit": "ns",
            "range": "± 186710.09698158645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3786720.930232558,
            "unit": "ns",
            "range": "± 139703.2885697731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4515315,
            "unit": "ns",
            "range": "± 199398.4723816499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4775120,
            "unit": "ns",
            "range": "± 203319.56091791033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7600221.875,
            "unit": "ns",
            "range": "± 347716.7865388052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304831.74603174604,
            "unit": "ns",
            "range": "± 13948.058315520822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291432.7868852459,
            "unit": "ns",
            "range": "± 12945.845167613628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244755.1724137931,
            "unit": "ns",
            "range": "± 10268.9520539119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4559506.666666667,
            "unit": "ns",
            "range": "± 133274.2335687335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4124032.6923076925,
            "unit": "ns",
            "range": "± 167084.91761547522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22675.25773195876,
            "unit": "ns",
            "range": "± 2281.5396358524295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100009.1836734694,
            "unit": "ns",
            "range": "± 8685.158412276003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92543.95604395604,
            "unit": "ns",
            "range": "± 7656.590607534121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108138.54166666667,
            "unit": "ns",
            "range": "± 15710.950721955667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6094.736842105263,
            "unit": "ns",
            "range": "± 1042.946768500719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21769.892473118278,
            "unit": "ns",
            "range": "± 1968.379655090238"
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
          "id": "de9d17c6e23bde9275d8fdfded883f81ca930325",
          "message": "Partially removed t from block",
          "timestamp": "2023-05-02T11:04:10+09:00",
          "tree_id": "8a5c838f0ab496c8378d56632536d2700559c89e",
          "url": "https://github.com/greymistcube/libplanet/commit/de9d17c6e23bde9275d8fdfded883f81ca930325"
        },
        "date": 1682994088661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1622113.75,
            "unit": "ns",
            "range": "± 84430.64825942254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3071937.777777778,
            "unit": "ns",
            "range": "± 169380.71642347553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2533987.5,
            "unit": "ns",
            "range": "± 116746.39656585171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6326057.777777778,
            "unit": "ns",
            "range": "± 352635.7285835596"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57240.65934065934,
            "unit": "ns",
            "range": "± 3778.888079315808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8566872.413793104,
            "unit": "ns",
            "range": "± 246572.5913057881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23074773.333333332,
            "unit": "ns",
            "range": "± 399472.0685151961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60512013.63636363,
            "unit": "ns",
            "range": "± 1419445.0838252502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120392022.22222222,
            "unit": "ns",
            "range": "± 2574612.798199682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237582987.5,
            "unit": "ns",
            "range": "± 4644283.6690387465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5823533.307291667,
            "unit": "ns",
            "range": "± 46748.90318292009"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1869202.2005208333,
            "unit": "ns",
            "range": "± 13672.79783984201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385534.453125,
            "unit": "ns",
            "range": "± 12545.705998578667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3190881.7578125,
            "unit": "ns",
            "range": "± 43452.60596629708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1000760.4910714285,
            "unit": "ns",
            "range": "± 9356.74895871954"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925064.1373697916,
            "unit": "ns",
            "range": "± 7619.113686646104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3727366.6666666665,
            "unit": "ns",
            "range": "± 140906.12284264105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4013854.1666666665,
            "unit": "ns",
            "range": "± 100595.54825990135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4562285.294117647,
            "unit": "ns",
            "range": "± 143930.60855917307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4923151.428571428,
            "unit": "ns",
            "range": "± 149759.78092663357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7654640,
            "unit": "ns",
            "range": "± 288078.1912480139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318385.0746268657,
            "unit": "ns",
            "range": "± 14476.797043747683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298441.53846153844,
            "unit": "ns",
            "range": "± 13794.336386581046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255688.23529411765,
            "unit": "ns",
            "range": "± 13690.337327270418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4673076.923076923,
            "unit": "ns",
            "range": "± 68087.43342015169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4228426.666666667,
            "unit": "ns",
            "range": "± 75182.09766642461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25418.279569892475,
            "unit": "ns",
            "range": "± 3123.1584569275497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111335.78947368421,
            "unit": "ns",
            "range": "± 8260.826755150565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103682.47422680413,
            "unit": "ns",
            "range": "± 11278.029991142055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117271.13402061856,
            "unit": "ns",
            "range": "± 18352.525704716176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7527.083333333333,
            "unit": "ns",
            "range": "± 1176.0307162714905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23151.685393258427,
            "unit": "ns",
            "range": "± 2341.527879182472"
          }
        ]
      }
    ]
  }
}